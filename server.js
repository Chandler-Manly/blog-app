const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');


const postsRoutes = require('./routes/posts-routes');


const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())

//! WHAT IS DEV REFERRING TO?
app.use(logger('dev'))

app.use('/api', postsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
