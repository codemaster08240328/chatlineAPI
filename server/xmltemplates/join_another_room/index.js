const fs = require('fs');
const BASE_PATH = "usr/happyhour_media"
let xml = fs.readFileSync(__dirname + '/join_another_room.xml', { encoding: 'utf-8' });
module.exports = (sex, num) => {
    return xml.replace(/base-dir/g, BASE_PATH)
        .replace(/girl_or_guy/g, sex)
        .replace(/room_num/g, num)
}