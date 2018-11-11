const fs = require('fs');
const BASE_PATH = "usr/happyhour_media"
let xml = fs.readFileSync(__dirname + '/conference.xml', { encoding: 'utf-8' });
module.exports = (sex, num, uuid) => {
    return xml.replace(/girl_or_guy/g, sex)
    .replace(/room_num/g, num)
    .replace(/base-dir/g, BASE_PATH)
    .replace(/uuid/g, uuid)
}
