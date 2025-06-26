
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
    'index.csr.html': {size: 811, hash: 'd6096c89c0c34b71c1ebdf194e9b8f2abe3b3dbc43f332b82ea5cacb3d7e6337', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '839515b6ef05724361373c891d684b93022cee6259d6d5e5f4c7b3eeec2f347d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4120360, hash: '41c3eb3a3245b93deba785b5d558791e9d6e997791e6bb90b58f99c43fa7b53a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HOMYPVUV.css': {size: 278, hash: 'llt1eFpClJ4', text: () => import('./assets-chunks/styles-HOMYPVUV_css.mjs').then(m => m.default)}
  },
};
