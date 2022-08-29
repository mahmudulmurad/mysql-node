const router = require('express').Router()
const db = require('../db/connection')

// CREATE TABLE users( id int NOT NULL AUTO_INCREMENT, name varchar(15) NOT NULL, email varchar(15) NOT NULL, password varchar(32) NOT NULL, PRIMARY KEY (id) );

router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) throw error
        res.status(200).json({ result, msg: 'All user fetched from user table' })
    });
});

router.post('/users', (req, res) => {
    db.query('INSERT INTO users SET ?', req.body, (error, result) => {
        if (error) throw error
        res.status(200).json({ result, msg: 'New User created' })
    });
});

router.delete('/users', (req, res) => {
    db.query('INSERT INTO users SET ?', req.body, (error, result) => {
        if (error) throw error
        res.status(200).json({ result, msg: 'New User created' })
    });
});

module.exports = router