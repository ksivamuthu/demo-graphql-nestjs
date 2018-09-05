module.exports = {
    'type': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'username': 'root',
    'password': 'password',
    'database': 'devconferences',
    "entities": ["src/**/**.model{.ts,.js}"],
    "synchronize": true
};