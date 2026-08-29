const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
data.features = ['mega-menu', 'fonts', 'color', 'breadcrumb'];
fs.writeFileSync(file, JSON.stringify(data, null, 2));
