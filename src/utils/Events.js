// Create Map() object to keep track of all of our events
const events = new Map();
// export Object that allow us to set up and also emit those events

export default {
	// fn is a function name
	// $ before on is Vue convention
	// Add an event
	$on(eventName, fn) {
		// check if we have an event with a given name
		// use has method of the map object
		if (!events.has(eventName)) {
			// if we don't have the event, we create one with a value of an empty array
			events.set(eventName, []);
		}
		// if we do have an event already, we push the array into a function we want to listen to
		events.get(eventName).push(fn);
	},
	// Remove an event - we can implement it later
	// for now it would trow an error
	$off(eventName, fn) {
		throw { message: "Not implemented" };
	},

	// To emit/trigger the event
	$emit(eventName, data) {
		// again check if we do have an event or not
		// and we do have the event, then we execute all the functions which have been set up for this event via get array and we iterate each event
		if (events.has(eventName)) {
			events.get(eventName).forEach((fn) => fn(data));
		}
	},
};
