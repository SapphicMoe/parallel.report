export const prerender = false;

import type { APIRoute, APIContext } from 'astro';

interface Props {
  name: string;
  bungieName: string;
  link: string;
  resourceName: string;
  resourceLink: string;
  resourceIcon?: string;
  resourceColor: string;
  resourceContributors?: string;
  resourceRole: string;
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
          title: 'New suggestion (maintainer)',
          type: 'rich',
          color: 0x89dceb,
          timestamp: new Date().toISOString(),
          fields: [
            {
              name: 'Name',
              value: details.name,
            },
            {
              name: 'Bungie Name',
              value: details.bungieName,
            },
            {
              name: 'Link',
              value: details.link,
            },
            {
              name: 'Resource name',
              value: details.resourceName,
            },
            {
              name: 'Resource link',
              value: details.resourceLink,
            },
            {
              name: 'Resource icon',
              value: details.resourceIcon || 'None',
            },
            {
              name: 'Resource color',
              value: details.resourceColor,
            },
            {
              name: 'Resource contributors',
              value: details.resourceContributors || 'None',
            },
            {
              name: 'Resource role / contribution',
              value: details.resourceRole,
            },
            {
              name: 'Method of Contact',
              value: details.contact || 'None',
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
  const bungieName = data.get('bungieName')?.toString();
  const link = data.get('link')?.toString();
  const resourceName = data.get('resourceName')?.toString();
  const resourceLink = data.get('resourceLink')?.toString();
  const resourceIcon = data.get('resourceIcon')?.toString();
  const resourceColor = data.get('resourceColor')?.toString();
  const resourceContributors = data.get('resourceContributors')?.toString();
  const resourceRole = data.get('resourceRole')?.toString();
  const contact = data.get('contact')?.toString();

  // Validate the data
  if (!name || !bungieName || !link || !resourceName || !resourceLink || !resourceColor || !resourceRole) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  await sendDiscordMessage(
    {
      name,
      bungieName,
      link,
      resourceName,
      resourceLink,
      resourceIcon,
      resourceColor,
      resourceContributors,
      resourceRole,
      contact,
    },
    import.meta.env.DISCORD_WEBHOOK_URL
  );

  return redirect('/success');
};
