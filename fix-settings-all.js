const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.settings.forEach(s => {
    if (!('description' in s)) s.description = null;
    if (!('labelHTML' in s)) s.labelHTML = null;
    if (!('icon' in s)) s.icon = 'sicon-cog';
    if (!('required' in s)) s.required = false;
});

data.components.forEach(c => {
    c.fields.forEach(f => {
        if (!('description' in f)) f.description = null;
        if (!('icon' in f)) f.icon = 'sicon-box';
        if (!('required' in f)) f.required = false;
        if (!('value' in f) && f.type !== 'collection') f.value = null;
        if (f.type === 'string' && f.format === 'text') {
            if (!('minLength' in f)) f.minLength = 0;
            if (!('maxLength' in f)) f.maxLength = 255;
            if (!('placeholder' in f)) f.placeholder = '';
            if (!('multilanguage' in f)) f.multilanguage = false;
        }
        if (f.type === 'collection' && f.fields) {
            f.fields.forEach(sub => {
                if (!('description' in sub)) sub.description = null;
                if (!('icon' in sub)) sub.icon = 'sicon-box';
                if (!('required' in sub)) sub.required = false;
                if (!('value' in sub) && sub.type !== 'collection') sub.value = null;
                if (sub.type === 'string' && sub.format === 'text') {
                    if (!('minLength' in sub)) sub.minLength = 0;
                    if (!('maxLength' in sub)) sub.maxLength = 255;
                    if (!('placeholder' in sub)) sub.placeholder = '';
                    if (!('multilanguage' in sub)) sub.multilanguage = false;
                }
            });
        }
    });
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed settings and fields to contain all Raed-like fields');
