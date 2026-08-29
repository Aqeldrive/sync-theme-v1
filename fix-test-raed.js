const fs = require('fs');
const r = JSON.parse(fs.readFileSync('raed_twilight.json', 'utf8'));
r.name = { en: 'theme_ona', ar: 'أونا' };
r.description = { en: 'ONA Theme', ar: 'ثيم أونا' };
r.repository = 'https://github.com/Aqeldrive/theme_ona';
r.author_email = 'aqel.drive@gmail.com';
r.support_url = 'https://github.com/Aqeldrive/theme_ona/issues';
fs.writeFileSync('twilight.json', JSON.stringify(r, null, 2));
console.log('Copied Raed twilight.json structure for a test');
