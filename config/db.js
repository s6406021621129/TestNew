const { table } = require("console");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./database/user.sqlite');
db.run(`CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    status INTEGER
   
)`);

module.exports = db;