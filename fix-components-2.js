const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    delete c.name;
    if (typeof c.title === 'string') {
        c.title = {
            "en": c.title,
            "ar": c.title
        };
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed components titles and names');
