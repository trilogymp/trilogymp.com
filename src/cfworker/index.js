addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event.request));
});

async function handleEvent(request) {
  const response = await fetch(request);

  const newResponse = new Response(response.body, response);

  newResponse.headers.set(
    'Content-Security-Policy',
    "default-src 'none'; script-src 'self' https://static.cloudflareinsights.com/beacon.min.js; style-src 'self'; img-src 'self'; connect-src 'self' https://cloudflareinsights.com/cdn-cgi/rum; frame-ancestors 'none'; base-uri 'none'; form-action 'none'; upgrade-insecure-requests",
  );
  newResponse.headers.set(
    'Permissions-Policy',
    'accelerometer=(),autoplay=(),camera=(),document-domain=(),encrypted-media=(),fullscreen=(),geolocation=(),gyroscope=(),magnetometer=(),microphone=(),midi=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),sync-xhr=(),usb=(),screen-wake-lock=(),xr-spatial-tracking=()',
  );
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  newResponse.headers.set('X-UA-Compatible', 'IE=edge');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');

  return newResponse;
}
