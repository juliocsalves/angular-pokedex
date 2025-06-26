
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
    'index.csr.html': {size: 811, hash: '879a743210cfab7c42c8361ea6e88c326c1710bccd3939882eaa7ed50373d200', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'f609ac001dcd7d169f4960543ee59d802ebdad65cfb71631de44ee1d3e80cd65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14521305, hash: '09c43e3b35986a6bc75abb022f8af05783338756c9bfa4822ea8944df4133f1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HOMYPVUV.css': {size: 278, hash: 'llt1eFpClJ4', text: () => import('./assets-chunks/styles-HOMYPVUV_css.mjs').then(m => m.default)}
  },
};
