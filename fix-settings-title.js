const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Remove static title to avoid any missing fields error
data.settings = data.settings.filter(s => s.type !== 'static');

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Removed static title from settings');
