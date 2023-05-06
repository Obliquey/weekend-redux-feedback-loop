const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');
const { sliderClasses } = require('@mui/material');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

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