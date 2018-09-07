var engine = require('apollo-engine');

const engineLauncher = new engine.ApolloEngine({
  apiKey: 'service:demo-conference-service:9Zz5mTcdJqNkEaZeZN7Mqw',
  "stores": [{
    "name": "embeddedCache",
    "inMemory": {
      "cacheSize": 10485760
    }
  }],
  "queryCache": {
    "publicFullQueryStore": "embeddedCache",
    "privateFullQueryStore": "embeddedCache"
  },
  frontends: [
    {
      endpoints: ['/'],
      port: 4000,
    },
  ],
  logging: {
    level: 'INFO',
  },
  origins: [
    {
      http: {
        url: 'http://127.0.0.1:3000',
      },
    },
  ],
  port: 
});

engineLauncher.start().catch(error => {
  throw error;
});
