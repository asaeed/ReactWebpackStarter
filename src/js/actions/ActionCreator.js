
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
	
	addMessage: function(message) {
		AppDispatcher.dispatch({
			type: 'add-message',
			data: message
		});
	}
};