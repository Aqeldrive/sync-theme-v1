const fs = require('fs');
const path = require('path');

// Use absolute path to ensure we always work in the theme directory
const themeDir = 'D:/GEN/SallaThemes/i-theme';
const file = 'D:/GEN/SallaThemes/i-theme/twilight.json';

const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// 1. Add features array based on components (if not already present)
let features = data.features || data.components.map(c => 'component-' + c.path.replace('home.', ''));

// Add standard Salla features (ensure they exist)
const standardFeatures = ['mega-menu', 'fonts', 'color', 'breadcrumb', 'unite-cards-height', 'filters'];
standardFeatures.forEach(f => {
    if (!features.includes(f)) {
        features.push(f);
    }
});

// Remove duplicates if any
data.features = [...new Set(features)];

// 2. Make sure name is correct
data.name = data.name || { en: 'theme_ona', ar: 'أونا' };

// 3. Ensure all required settings exist
const requiredSettings = {
    glassmorphism: { type: 'boolean', format: 'switch', value: true, selected: true },
    dark_mode: { type: 'boolean', format: 'switch', value: true, selected: true },
    header_is_sticky: { type: 'boolean', format: 'switch', value: true, selected: true },
    footer_is_dark: { type: 'boolean', format: 'switch', value: true, selected: false },
    sticky_add_to_cart: { type: 'boolean', format: 'switch', value: true, selected: true },
    enable_more_menu: { type: 'boolean', format: 'switch', value: true, selected: true },
    show_tags: { type: 'boolean', format: 'switch', value: true, selected: true },
    is_more_button_enabled: { type: 'boolean', format: 'switch', value: true, selected: true }
};

// Ensure all required settings are present
Object.entries(requiredSettings).forEach(([id, defaultSetting]) => {
    const existing = data.settings.find(s => s.id === id);
    if (!existing) {
        data.settings.push({ ...defaultSetting, id });
    } else {
        // Update format and value if missing
        existing.format = existing.format || defaultSetting.format;
        existing.value = existing.value !== undefined ? existing.value : defaultSetting.value;
        existing.selected = existing.selected !== undefined ? existing.selected : defaultSetting.selected;
    }
});

// 4. Ensure all components have proper field types
function fixField(f) {
    let oldType = f.type;
    
    if (oldType === 'collection') {
        f.format = 'collection';
        if (!f.item_label) f.item_label = 'عنصر';
        if (f.fields) {
            f.fields.forEach(fixField);
        }
    } else if (oldType === 'image') {
        f.type = 'string';
        f.format = 'image';
    } else if (oldType === 'url') {
        f.type = 'string';
        f.format = 'text';
    } else if (oldType === 'products') {
        f.type = 'items';
        f.format = 'dropdown-list';
        f.source = 'products';
        f.multichoice = true;
        f.searchable = true;
    } else if (oldType === 'category') {
        f.type = 'items';
        f.format = 'dropdown-list';
        f.source = 'categories';
        f.multichoice = false;
        f.searchable = true;
    } else if (oldType === 'textarea') {
        f.type = 'string';
        f.format = 'textarea';
    } else if (oldType === 'number') {
        f.type = 'number';
        f.format = 'integer';
        if (f.default) {
            f.value = parseInt(f.default) || 0;
            delete f.default;
        }
    } else if (oldType === 'text') {
        f.type = 'string';
        f.format = 'text';
    } else if (oldType === 'switch' || oldType === 'boolean') {
        f.type = 'boolean';
        f.format = 'switch';
    } else if (oldType === 'select') {
        f.type = 'items';
        f.format = 'dropdown-list';
        f.source = 'Manual';
    } else if (oldType === 'icon') {
        f.type = 'string';
        f.format = 'icon';
    } else {
        if (f.type !== 'static' && f.type !== 'items' && f.type !== 'string' && f.type !== 'boolean') {
            f.type = 'string';
            f.format = 'text';
        }
    }
}

if (data.components) {
    data.components.forEach(c => {
        if (c.fields) {
            c.fields.forEach(fixField);
        }
    });
}

// 5. Write back
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('✅ twilight.json validated and fixed - Features:', data.features.length, 'Components:', data.components.length, 'Settings:', data.settings.length);