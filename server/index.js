require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {CONNECTION_STRING, SERVER_PORT} = process.env;

const app = express();

massive({connectionString: CONNECTION_STRING, 
    ssl: {rejectUnauthorized: false}
}).then(db =>{
    app.set('db', db)
    console.log('database is connected')
});

app.use(express.json());

app.post()

app.listen(SERVER_PORT, () => console.log(`I am always listening on port: ${SERVER_PORT}`));