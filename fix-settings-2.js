const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.settings.forEach(s => {
    if (s.type === 'boolean') {
        s.selected = s.value;
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
