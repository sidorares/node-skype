module.exports.createClient = function(name, bus, callback) {
	switch(process.platform) {
		case 'darwin': 
		  return require('skype-applescript').createClient(name, bus, callback);
		default:
		  return require('skype-dbus').createClient(name, bus, callback);
	}
}
