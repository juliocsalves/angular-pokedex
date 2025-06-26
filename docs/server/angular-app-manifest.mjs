
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 811, hash: '0fc74792cf5a860693cf1e3b2dc840f3b12ba51c0c5504869879c0647da83184', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '0e18a365449d1e2dfcdc603d1a5521366d12e22541957a6c2d7184ad35234b56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4120360, hash: '1d6cf95b4edc8d2dbe1079fd1f4560e0c5a601eaa3ed292e1d25e3ae370f0c38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HOMYPVUV.css': {size: 278, hash: 'llt1eFpClJ4', text: () => import('./assets-chunks/styles-HOMYPVUV_css.mjs').then(m => m.default)}
  },
};
