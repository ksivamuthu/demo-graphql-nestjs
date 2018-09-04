module.exports = {
    'type': 'mongodb',
    'host': 'localhost',
    'database': 'dev-conferences',
    "entities": ["src/**/**.model{.ts,.js}"],
    "synchronize": true
};