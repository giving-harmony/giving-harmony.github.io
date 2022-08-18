const pages = {
  'Home'       : 'index',
  'Concerts'   : 'concerts',
  'Activities' : 'activities',
  'Join Us'    : 'joinus',
  'About'      : 'about'
};

function navBar(page, level) {
  let bar = '<span class="navbar-brand">G</span>\n' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" ' +
            '    data-target="#navbarSupportedContent"\n' +
            '    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
            '  <span class="navbar-toggler-icon"></span>\n' +
            '</button>\n\n' +

            '<div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
            '  <ul class="navbar-nav mr-auto">\n';

  Object.keys(pages).forEach(k => {
    let active = page === k ? ' active' : '',
    prefix = page !== k || level > 0 ? '../'.repeat(level) : '',
    link = `${prefix}${pages[k]}.html`;
    bar += `    <li class="nav-item"><a class="nav-link${active}" href="${link}">${k}</a></li>\n`;
  });

  return bar + '  </ul>\n</div>';
}

export { navBar };
