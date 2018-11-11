const fs = require('fs');

let xml = fs.readFileSync(__dirname + '/route_to_conference_room.xml', { encoding: 'utf-8' });

module.exports = () => {
    return xml
}