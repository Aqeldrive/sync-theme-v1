const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Only standard features
data.features = ['mega-menu', 'fonts', 'color', 'breadcrumb'];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed features array to only contain standard enum values');
