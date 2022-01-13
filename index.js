const express = require('express');
const app = express();
const port = 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.json(`<h1>Howdy</h1>`)
});