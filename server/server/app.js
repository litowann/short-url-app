const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {generate} = require('shortid');
const cors = require('cors');
const { schema } = require('../schema/schema');

const app = express();
const urlMapping = new Map();

const BASED_URL = 'http://localhost:3005/';
const PORT = 3005;

const root = {
    shortenURL: ({ longURL }) => {
        const shortURL = generate();
        urlMapping[shortURL] = longURL;
        return BASED_URL + shortURL;
    },
};

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.get('/:shortURL', (req, res) => {
    const longURL = urlMapping[req.params.shortURL];

    return longURL ? res.redirect(longURL) : res.status(404).send('URL not found');
});

app.listen(PORT, err => {
    err ? console.log('Server error', err) : console.log(`Server is working on port: ${PORT}`)
});
