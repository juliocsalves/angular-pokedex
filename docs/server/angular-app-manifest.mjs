
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
    'index.csr.html': {size: 811, hash: '90f48a6765c5e27559751c43101b31cefef612fa28fa4aa5e50a6a2cd7e60aa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '12e5593a38274dc3d3db236e55f648290f4c9fb479e05f3507b86d051eedda7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4120180, hash: '93ef29e1608dd4e359d4442d56e0779c709579fc6bc3b2852cb84042774cca61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HOMYPVUV.css': {size: 278, hash: 'llt1eFpClJ4', text: () => import('./assets-chunks/styles-HOMYPVUV_css.mjs').then(m => m.default)}
  },
};
