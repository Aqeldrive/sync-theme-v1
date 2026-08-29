const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Delete potential conflicting or legacy keys
delete data.version;
delete data.support;

// Salla uses object for name in modern Twilight
data.name = {
  "en": "theme_ona",
  "ar": "أونا"
};

// Also let's reorder keys for neatness
const newData = {
  name: data.name,
  features: data.features,
  settings: data.settings,
  components: data.components
};

fs.writeFileSync(file, JSON.stringify(newData, null, 2));
console.log("twilight.json deeply cleaned to match Salla standard");
