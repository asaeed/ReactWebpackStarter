
var AppDispatcher = require('../dispatcher/AppDispatcher');
var MicroEvent = require('../utilities/microevent.js');

// init store

var MessageStore = {
	messages: [],

	getAll: function() {
		return this.messages;
	}	
};

// setup event emitter

MicroEvent.mixin(MessageStore);

// listen for events

MessageStore.dispatchToken = AppDispatcher.register(function(action) {
	
	switch(action.type) {

		case 'add-message':
			MessageStore.messages.push(action.data);
			MessageStore.trigger('change');
			break;
		case 'clear':
			MessageStore.messages.clear();
			MessageStore.trigger('change');
	}
});

export default MessageStore;