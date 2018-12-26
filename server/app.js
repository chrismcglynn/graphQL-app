require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

// connect to mlab database
mongoose.connect('mongodb://chris:test123@ds215172.mlab.com:15172/gql-app');
mongoose.connection.once('open', () => {
  console.log('connected to database!');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on Port 4000');
});

