const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.components.forEach(c => {
    if (!c.image) {
        c.image = "https://cdn.salla.network/images/themes/raed/preview-images/main-links.png?v=1.1";
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added placeholder images to components');
