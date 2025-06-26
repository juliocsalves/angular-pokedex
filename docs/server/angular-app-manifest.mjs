
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
    'index.csr.html': {size: 811, hash: 'f05ee64e32a264b46313091d34eec247f9f8f1df4d5e6b50dd42b244933fb875', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '06964fb5da95fcc00b476b5fc5db91a624778aa2ce2bd7eb1b4869148246d12f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4120260, hash: '480035c8e9c6395be3f26baa2dd497ab1f592586a635ebbf29e8e7c0b21256bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HOMYPVUV.css': {size: 278, hash: 'llt1eFpClJ4', text: () => import('./assets-chunks/styles-HOMYPVUV_css.mjs').then(m => m.default)}
  },
};
