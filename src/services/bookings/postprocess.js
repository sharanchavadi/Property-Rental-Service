const rp = require('request-promise');

exports.createEvents = function(options) {
  return function(hook) {
  	let namespace = 'properties';
  	let person = hook.result.userName;
  	let action = 'booked';
  	let thing = hook.result.propertyName;
  	return rp({
  		method: 'POST',
		uri: `http://localhost:3031/revents`, 
		body: {namespace, person, action, thing},
		json: true
	 }).then(result => {
          return hook;
        });
  };
};

exports.getRecommendations = function(options) {
  return function(hook) {
  	let namespace = 'properties';
  	let person = hook.result.userName;
  	let action = 'booked';
  	let type = 'person';
  	return rp({
  		method: 'GET',
		uri: `http://localhost:3031/recommendations?namespace=${namespace}&person=${person}&action=${action}&type=${type}`,
		json: true
	 }).then(result => {
          return hook;
        });
  };
};