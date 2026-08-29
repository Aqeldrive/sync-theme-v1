const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    c.fields.forEach(f => {
        if (f.type === 'collection') {
            if (!('value' in f)) f.value = [];
            if (!('minLength' in f)) f.minLength = 1;
            if (!('maxLength' in f)) f.maxLength = 10;
        }
    });
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed collection minLength/maxLength/value');
