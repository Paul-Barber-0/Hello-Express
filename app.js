const { response } = require('express');
const express = require('express');
app = express();
const PORT =  process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, <b>home</b>!<h1>');
});

app.get('/params/:key', (req, res) => {
    console.log(req.params);
});

app.get('/page/:page', (req, res) => {
    res.send(`You are on the ${req.params.page} page.`);
});

app.get('/req', (req, res, next) => {
    console.log('req: ', req);
    res.send('Check out the command line!');
});

app.get('/res', (req, res, next) => {
    console.log('res: ', res);
    res.send('Check out the command line!');
});

app.get('/next', (req, res, next) => {
    console.log('next: ', next);
    res.send('Check out the command line!');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});