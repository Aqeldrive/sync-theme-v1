const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    if (c.fields) {
        c.fields.forEach(f => {
            if (f.type === 'items') {
                if (!f.options) f.options = [];
                if (!f.selected) f.selected = [];
            }
            if (f.type === 'collection' && f.fields) {
                f.fields.forEach(sub => {
                     if (sub.type === 'items') {
                        if (!sub.options) sub.options = [];
                        if (!sub.selected) sub.selected = [];
                     }
                });
            }
        });
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed items fields');
