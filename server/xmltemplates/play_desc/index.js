const fs = require('fs');
const BASE_PATH = "usr/happyhour_media"
let xml = fs.readFileSync(__dirname + '/play_desc.xml', { encoding: 'utf-8' });
module.exports = () => {
    return xml.replace(/base-dir/g, BASE_PATH)
}
