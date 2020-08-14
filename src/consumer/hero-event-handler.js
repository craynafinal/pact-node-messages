// start with consumer side

// consumer receives a HeroCreatedEvent
// building a function that takes an object and validates if it's really HeroCreatedEvent
// then forward the event to the domain logic that actually processes the event (where it says // pass ...)

// the handler should not implement the domain logic itself

const HeroCreatedEvent = require('../common/hero-created-event');

exports.HeroEventHandler = {
    handleHeroCreatedEvent: (message) => {

        HeroCreatedEvent.validateId(message);
        HeroCreatedEvent.validateName(message);
        HeroCreatedEvent.validateSuperpower(message);
        HeroCreatedEvent.validateUniverse(message);

        // pass message into business logic
        // note that the business logic should be mocked away for the contract test

        console.log('validation is successful');

        return;
    }
};