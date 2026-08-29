const fs = require('fs');
const crypto = require('crypto');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    if (!c.key) c.key = crypto.randomUUID();
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added UUIDs to components');
