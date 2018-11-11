const fs = require('fs');
const BASE_PATH = "usr/happyhour_media"
let xml = fs.readFileSync(__dirname + '/play_participant.xml', { encoding: 'utf-8' });
module.exports = () => {
    return xml.replace(/record_path/g, BASE_PATH)
        .replace(/xxx/g, "record_desc")
        .replace(/unique code/g, getRandomInt(100, 999))
}

function getRandomInt(min, max) {
	return Math.floor(Math.random()*(max-min+1)) + min;
}