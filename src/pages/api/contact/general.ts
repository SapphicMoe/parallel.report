export const prerender = false;

import type { APIRoute, APIContext } from 'astro';

interface Props {
  name: string;
  message: string;
  contact: string;
}

const turnstileURL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const sendDiscordMessage = async (details: Props, url: string) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: '<@312145496179474434>',
      embeds: [
        {
          title: 'New general message',
          type: 'rich',
          color: 0xf38ba8,
          timestamp: new Date().toISOString(),
          fields: [
            {
              name: 'Name',
              value: details.name,
            },
            {
              name: 'Message',
              value: details.message,
            },
            {
              name: 'Method of Contact',
              value: details.contact,
            },
          ],
        },
      ],
    }),
  });
};

export const POST: APIRoute = async ({ request, redirect }: APIContext) => {
  const data = await request.formData();

  const turnstile_token = data.get('cf-turnstile-response');

  const formData = new FormData();
  formData.append('secret', import.meta.env.TURNSTILE_SECRET_TOKEN);
  // @ts-expect-error FormData does not have a set method
  formData.append('response', turnstile_token);

  const result = await fetch(turnstileURL, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();

  if (!outcome.success) {
    return new Response(
      JSON.stringify({
        message: 'Turnstile error. Are you a human?',
      }),
      { status: 500 }
    );
  }

  const name = data.get('name')?.toString();
  const message = data.get('message')?.toString();
  const contact = data.get('contact')?.toString();

  // Validate the data
  if (!name || !message || !contact) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  await sendDiscordMessage({ name, message, contact }, import.meta.env.DISCORD_WEBHOOK_URL);

  return redirect('/success');
};
