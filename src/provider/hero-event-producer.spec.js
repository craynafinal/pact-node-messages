// ./src/provider/hero-event-producer.spec.js
const {MessageProviderPact} = require('@pact-foundation/pact');
const {CreateHeroEventProducer} = require('./hero-event-producer');
const path = require('path');

describe("message producer", () => {

    const messagePact = new MessageProviderPact({
        messageProviders: {
            "a hero created message": 
                () => CreateHeroEventProducer.produceHeroCreatedEvent(),
        },
        log: path.resolve(process.cwd(), "logs", "pact.log"),
        logLevel: "info",
        provider: "node-message-provider",
        // pactBrokerUrl: "BROKER_URL",
        // pactBrokerUsername: process.env.PACT_USERNAME,
        // pactBrokerPassword: process.env.PACT_PASSWORD
        pactUrls: [
          path.resolve(
            process.cwd(),
            "pacts",
            "hero-consumer-hero-provider.json"
          ),
        ]
    });

    describe("'hero created' message producer", () => {

        it("should create a valid hero created message", (done) => {
            messagePact
                .verify()
                .then(() => done(), (error) => done(error));
        }).timeout(5000);

    });

});