const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    if (c.fields) {
        c.fields.forEach(f => {
            if (f.type === 'collection' && f.fields) {
                f.fields.forEach(sub => {
                    if (!sub.id.startsWith(f.id + '.')) {
                        sub.id = f.id + '.' + sub.id;
                    }
                });
            }
        });
    }
});

// Also let's clean up features array to only contain safe features
data.features = data.features.filter(feat => {
    if (feat.startsWith('component-')) return true;
    const safe = ['mega-menu', 'fonts', 'color', 'breadcrumb'];
    return safe.includes(feat);
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed collection subfield IDs and cleaned features');
