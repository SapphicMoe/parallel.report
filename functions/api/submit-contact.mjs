// Adapted from https://github.com/WalshyDev/contact-form-with-workers/blob/main/worker/index.mjs
// Credit: @WalshyDev, @Erisa

export async function onRequestPost(ctx) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  };

  let obj;

  try {
    obj = await ctx.request.json();
  } catch (e) {
    return new Response('Invalid JSON body!', {
      status: 400,
      headers: corsHeaders,
    });
  }

  if (!obj.name || !obj.resourceName || !obj.resourceURL || !obj.role || !obj.captcha) {
    return new Response('Invalid body', { status: 400, headers: corsHeaders });
  }

  const captchaVerified = await verifyTurnstile(
    obj.captcha,
    ctx.request.headers.get('cf-connecting-ip'),
    ctx.env.TURNSTILE_SECRET_KEY,
    ctx.env.TURNSTILE_SITE_KEY
  );

  if (!captchaVerified) {
    return new Response('Invalid captcha.', {
      status: 400,
      headers: corsHeaders,
    });
  }

  const discordResp = await sendDiscordMessage(obj, ctx.env.DISCORD_WEBHOOK_URL, ctx.env.DISCORD_TOKEN);

  if (discordResp.status === 200 || discordResp.status === 204) {
    return new Response('Success.', { status: 200, headers: corsHeaders });
  } else {
    return new Response('An error occurred while sending the message.', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

async function verifyTurnstile(response, ip, secret, siteKey) {
  let formData = new FormData();

  formData.append('response', response);
  formData.append('remoteip', ip);
  formData.append('secret', secret);
  formData.append('sitekey', siteKey);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const json = await res.json();

  return json.success;
}

async function sendDiscordMessage(details, webhookUrl) {
  return fetch(webhookUrl, {
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
              value: details.resourceURL,
            },
            {
              name: 'Role / Contribution',
              value: details.role,
            },
            {
              name: 'Email',
              value: details.email || 'None specified',
            },
          ],
        },
      ],
    }),
  });
}
