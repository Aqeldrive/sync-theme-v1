const fs = require('fs');
const file = 'twilight.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Flatten settings
let flatSettings = [];
data.settings.forEach(group => {
    // Add title for the group
    flatSettings.push({
        id: 'group_title_' + group.name,
        type: 'static',
        format: 'title',
        label: group.title
    });

    group.settings.forEach(setting => {
        let newSetting = {
            id: setting.id,
            label: setting.label,
        };

        if (setting.type === 'color') {
            newSetting.type = 'string';
            newSetting.format = 'color'; // assuming color is a valid format, or text
        } else if (setting.type === 'image') {
            newSetting.type = 'string';
            newSetting.format = 'image';
        } else if (setting.type === 'select') {
            newSetting.type = 'items';
            newSetting.format = 'dropdown-list';
            newSetting.options = setting.options;
            newSetting.source = 'Manual';
        } else if (setting.type === 'toggle' || setting.type === 'switch') {
            newSetting.type = 'boolean';
            newSetting.format = 'switch';
            newSetting.value = setting.default;
        } else if (setting.type === 'text') {
            newSetting.type = 'string';
            newSetting.format = 'text';
            if(setting.default) newSetting.value = setting.default;
        } else {
            newSetting.type = 'string';
            newSetting.format = 'text';
        }

        flatSettings.push(newSetting);
    });
});

data.settings = flatSettings;
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Fixed settings format');
