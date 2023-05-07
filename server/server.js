const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');
const { sliderClasses } = require('@mui/material');
const { legacy_createStore } = require('redux');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

// GET route for the admin Table
app.get('/feedback', (req, res) => {
    console.log("Inside GET route in server");

    const sqlText = `
        SELECT * FROM "feedback"
            ORDER BY "date" ASC;`;

    pool.query(sqlText)
        .then((dbRes) => {
            let feedback = dbRes.rows;
            res.send(feedback);
            consol.log("Is this working? Inside pool query in GET route")
        }).catch((dbErr) => {
            console.log("Error retrieving data from db", dbErr);
        })
})

// DELETE route for deleting specific items from the admin table
app.delete('/feedback/:id', (req, res) => {
    console.log("Inside DELETE route in server, going to delete this ==>", req.params);
    const id = req.params;

    let sqlText = `
        DELETE FROM "feedback"
            WHERE "id" = $1;
    `;

    let sqlValues = [id]

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log("Successfully delete element");
            res.sendStatus(200);
        }).catch((dbErr) => {
            console.log("Error deleting table element:", dbErr);
            res.sendStatus(500);
        })
})


// POST route for submitting final feedback to the database
app.post('/feedback', (req, res) => {
    console.log("We're in server /feedback, here's our feedback:", req.body);
    let feedback = req.body;
    let sqlText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
            VALUES
            ($1, $2, $3, $4);
    `;
    let sqlValues = [feedback.feelings, feedback.understanding, feedback.support, feedback.comments];

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log("Successfully created db entry:", dbRes);
            res.sendStatus(201);
        }).catch((dbErr) => {
            console.log("Error creating db entry:", dbErr);
        })

})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});