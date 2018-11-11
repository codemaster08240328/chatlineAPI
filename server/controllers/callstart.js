const callStart = require('../xmltemplates/calling_start');
const conference = require('../xmltemplates/conference');
const play_participant = require('../xmltemplates/play_participant');
const play_description = require('../xmltemplates/play_description');
const play_desc = require('../xmltemplates/play_desc');
const route_to_conference_room = require('../xmltemplates/route_to_conference_room');
const join_another_room = require('../xmltemplates/join_another_room')
module.exports = {
	list(req, res) {	
		const {body} = req;
		section = body.section;
		tag_name = body.tag_name;
		key_name = body.key_name;
		key_value =body.key_value;
		context = body.context;
		destination_number = body['Caller-Destination-Number'];
		caller_id_name = body.caller_id_name;
		caller_id_number = body.caller_id_number;
		network_addr = body.network_addr;
		girl_or_guy = body.variable_girl_or_guy;
		room_num = body.variable_room_num;
		ani = body.ani;
		aniii = body.aniii;
		rdnis = body.rdnis;
		source = body.source;
		chan_name = body.chan_name;
		uuid = body.variable_sip_call_id;
		endpoint_disposition = body.endpoint_disposition;
		console.log('body', body);
		console.log('query', req.query);
		console.log('req', req);

		if( typeof uuid == "undefined"){
			uuid = req.query.variable_sip_call_id;
		}
		if ( typeof destination_number == "undefined"){
			destination_number = req.query['Caller-Destination-Number']
		}
		if(destination_number === "enter_conference_root"){
			xml = conference(girl_or_guy, room_num, uuid);
		}else if(destination_number === "play_participant"){
			xml = play_participant();
		}else if(destination_number === "play_description"){
			xml = play_description();
		}else if(destination_number === "route_to_conference_room"){
			xml = route_to_conference_room();
		}else if(destination_number === "play_desc"){
			xml = play_desc();
		}else if(destination_number === "join_another_room"){
			xml = join_another_room(girl_or_guy, room_num);
		}else{
			xml = callStart(uuid);
		}
		console.log('res', xml);
		return res.header('content-Type', 'text/xml').send(xml);	
	}
};