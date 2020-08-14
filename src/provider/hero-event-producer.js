// ./src/provider/hero-event-producer.js
const HeroCreatedEvent = require('../common/hero-created-event');

// should be the only place where it creates the HeroCreatedEvent object
exports.CreateHeroEventProducer = {
    produceHeroCreatedEvent: () => {
        return new Promise((resolve, reject) => {
            resolve(new HeroCreatedEvent("Superman", "Flying", "DC", 42));
        });
    }
};