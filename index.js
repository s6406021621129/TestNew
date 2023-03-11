const express = require("express");
const sqlite3 = require("sqlite3");
//const db = require('./config/db.js');
const app = express();
const user = require('./routes/router.js')
app.use('/app',user);

app.listen(3000,() => {
    console.log("sever running")
});

