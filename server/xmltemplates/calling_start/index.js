const fs = require('fs');
const HANGUP_URL = 'http://localhost:8888/fs_hangup?call_id=';
// const AUDIO_PATH = 'http://localhost:8000/audio';
const AUDIO_PATH = 'http://chatline-api.herokuapp.com/audio';
const BASE_PATH = "usr/happyhour_media";

let xml = fs.readFileSync(__dirname + '/calling_start.xml', { encoding: 'utf-8' });
module.exports = (uuid) => {
    return xml
    		.replace(/base_path/g, BASE_PATH)
    		.replace(/__some_call_uuid_name/, uuid + "_name")
    		.replace(/__some_call_uuid_desc/, uuid + "_desc")
    		.replace(/unique_code/, getRandomInt(100, 999))
}

function getRandomInt(min, max) {
	return Math.floor(Math.random()*(max-min+1)) + min;
}