const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Add features array based on components
const features = data.components.map(c => 'component-' + c.path.replace('home.', ''));
// Add standard Salla features
features.push('mega-menu', 'fonts', 'color', 'breadcrumb', 'menu-images', 'filters');

// Remove duplicates if any
data.features = [...new Set(features)];

// Make sure name is correct
data.name = "theme_ona";

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Features added to twilight.json");
