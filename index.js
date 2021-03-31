const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = "1655815921-ZOWYyj5Y";

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));