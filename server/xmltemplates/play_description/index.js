const fs = require('fs');
const BASE_PATH = "usr/happyhour_media"
let xml = fs.readFileSync(__dirname + '/play_description.xml', { encoding: 'utf-8' });
module.exports = () => {
    return xml.replace(/record_path/g, BASE_PATH)
        .replace(/xxx/g, "record")
}
