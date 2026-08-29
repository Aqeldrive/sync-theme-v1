const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

function fixField(f) {
    // Preserve old type just in case we need it to decide
    let oldType = f.type;
    
    // Fix collection fields recursively
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
        // Simple text input for URL is usually just string format text or url if they support it
        // actually Salla uses variable-list for dynamic links, but text might be fine for simple URL string.
        f.type = 'string';
        f.format = 'text'; // Fallback to text to be safe, or just url if supported. We'll use text.
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
        if(f.default) {
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
        // Fallback for everything else
        if (f.type !== 'static' && f.type !== 'items' && f.type !== 'string' && f.type !== 'boolean') {
            f.type = 'string';
            f.format = 'text';
        }
    }
}

data.components.forEach(c => {
    if (c.fields) {
        c.fields.forEach(fixField);
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed components field types and formats');
