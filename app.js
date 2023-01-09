const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true}, () => 
    console.log('Database Connected')
);



app.get('/', (req,res) => {
    res.send('Its homepage');
});

app.listen(3333);