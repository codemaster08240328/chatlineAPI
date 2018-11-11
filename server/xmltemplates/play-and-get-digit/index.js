const fs = require('fs');
const HANGUP_URL = 'http://localhost:8888/fs_hangup?call_id=';
const INVALID_PATH = '/usr/media/0.mp3';

let xml = fs.readFileSync(__dirname + '/play-and-get-digit.xml', { encoding: 'utf-8' });

module.exports = (filePath, transferType, varname, callId) => {
    return xml.replace(/HANGUP_URL/, HANGUP_URL + callId)
        .replace(/INVALID_PATH/, INVALID_PATH)
        .replace(/FILE_PATH/, filePath)
        .replace(/VARNAME/, varname)
        .replace(/TRANSFER_TYPE/, '***play_and_get_digits::' + transferType + '***')
}