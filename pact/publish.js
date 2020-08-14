// ./pact/publish.js
let publisher = require('@pact-foundation/pact-node');
let path = require('path');

// this will send all pacts in the pacts folder to the specified pact broker
// both consumer and provider can access them from a ci pipeline
let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')],
    pactBroker: 'BROKER_URL',
    pactBrokerUsername: process.env.PACT_USERNAME,
    pactBrokerPassword: process.env.PACT_PASSWORD,
    consumerVersion: '2.0.0'
};

publisher.publishPacts(opts).then(
  () => console.log("Pacts successfully published"));