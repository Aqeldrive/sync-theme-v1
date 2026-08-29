const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    c.fields.forEach(f => {
        if (f.type === 'items' && f.format === 'dropdown-list') {
            delete f.value;
        }
    });
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Removed value from items fields');
