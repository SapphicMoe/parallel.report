export const prerender = false;

import type { APIRoute } from 'astro';
import type { APIContext } from 'astro';

interface Props {
  name: string;
  resourceName: string;
  resourceLink: string;
  role: string;
  contact?: string;
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
          title: 'New Suggestion',
          type: 'rich',
          fields: [
            {
              name: 'Name',
              value: details.name,
            },
            {
              name: 'Resource Name',
              value: details.resourceName,
            },
            {
              name: 'Resource URL',
              value: details.resourceLink,
            },
            {
              name: 'Role / Contribution',
              value: details.role,
            },
            {
              name: 'Method of Contact',
              value: details.contact || 'None specified',
            },
          ],
        },
      ],
    }),
  });
};

export const POST: APIRoute = async ({ request }: APIContext) => {
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
  const resourceName = data.get('resourceName')?.toString();
  const resourceLink = data.get('resourceLink')?.toString();
  const role = data.get('role')?.toString();
  const contact = data.get('contact')?.toString();

  // Validate the data
  if (!name || !resourceName || !resourceLink || !role) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  await sendDiscordMessage({ name, resourceName, resourceLink, role, contact }, import.meta.env.DISCORD_WEBHOOK_URL);

  return new Response('OK', { status: 200 });
};
