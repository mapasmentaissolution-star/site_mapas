import { AngularAppEngine, createRequestHandler } from '@angular/ssr'
import { getAllowedHosts, getContext, getTrustProxyHeaders } from '@netlify/angular-runtime/app-engine.js'
import { CATEGORIES, PRODUCTS } from './app/data/products.data';
import { SITE_URL } from './app/data/site.config';

const angularAppEngine = new AngularAppEngine({
  allowedHosts: getAllowedHosts(),
  trustProxyHeaders: getTrustProxyHeaders(),
})

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  if (new URL(request.url).pathname === '/sitemap.xml') {
    const paths = new Set([
      '/',
      ...CATEGORIES.map(category => `/${category.slug}`),
      ...PRODUCTS.map(product => `/produto/${product.slug}`)
    ]);
    const urls = [...paths]
      .map(path => `  <url><loc>${new URL(path, SITE_URL).toString()}</loc></url>`)
      .join('\n');

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
      {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600'
        }
      }
    );
  }

  const context = getContext()

  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  const result = await angularAppEngine.handle(request, context)
  return result || new Response('Not found', { status: 404 })
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler)
