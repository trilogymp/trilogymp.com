import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  // Get from KV storage for workers.dev requests
  if (
    event.request.url.match(
      /^https?:\/\/www-(dev|prod)\.trilogymp\.workers\.dev\//,
    )
  ) {
    try {
      const response = await getAssetFromKV(event);
      return addHeaders(new Response(response.body, response));
    } catch (e) {
      return new Response(
        `"${new URL(event.request.url).pathname}" not found`,
        {
          status: 404,
          statusText: 'Not found',
        },
      );
    }
  }

  return await handleRequest(event.request);
}

async function handleRequest(request) {
  const response = await fetch(request);
  return addHeaders(new Response(response.body, response));
}

function addHeaders(response) {
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'none'; script-src 'self' https://static.cloudflareinsights.com/beacon.min.js; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://cloudflareinsights.com/cdn-cgi/rum; frame-ancestors 'none'; base-uri 'none'; form-action 'none'; upgrade-insecure-requests",
  );
  response.headers.set(
    'Permissions-Policy',
    'accelerometer=(),autoplay=(),camera=(),document-domain=(),encrypted-media=(),fullscreen=(),geolocation=(),gyroscope=(),magnetometer=(),microphone=(),midi=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),sync-xhr=(),usb=(),screen-wake-lock=(),xr-spatial-tracking=()',
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  response.headers.set('X-UA-Compatible', 'IE=edge');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  return response;
}
