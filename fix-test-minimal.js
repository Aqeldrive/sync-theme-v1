const fs = require('fs');
const r = {
  name: { en: 'theme_ona', ar: 'أونا' },
  description: { en: 'ONA Theme', ar: 'ثيم أونا' },
  repository: 'https://github.com/Aqeldrive/theme_ona',
  author_email: 'aqel.drive@gmail.com',
  support_url: 'https://github.com/Aqeldrive/theme_ona/issues',
  features: ['mega-menu', 'fonts', 'color', 'breadcrumb'],
  settings: [],
  components: []
};
fs.writeFileSync('twilight.json', JSON.stringify(r, null, 2));
console.log('Created minimal twilight.json');
