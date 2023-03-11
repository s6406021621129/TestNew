const express = require('express');
const router = express.Router();
const db = require('../config/db.js')
const app = express()
app.use(express.json())

router.get("/user", (req,res) => {
    db.all("SELECT * FROM user",(err,row) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(row);
        }
    });
    
});

router.post("/user", (req,res) => {
    //db.all()
    const value = req.query;
    db.run("INSERT INTO user(name,email,password,status)VALUES(?,?,?,?)",
    value.name,value.email,value.password,value.status,
    function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            
            res.status(200).send(value);
        }
    }
    );
    //console.log(req.query.id); 
    //console.log(req.query.name);
    //console.log(req.query.email);
    //console.log(req.query.password);
    //console.log(req.query.status);    
    //res.end()
});

router.put('/user/:id', (req,res) => {
    const value = req.query;
    console.log(value);
    db.run("UPDATE user SET name = ?,email = ?, password = ?, status = ?, WHERE id = ?",
    value.name , value.email , value.password ,value.status,req.params.id, 
    function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            
            res.status(200).send(value);
        }
    }
    );
});

module.exports = router;

