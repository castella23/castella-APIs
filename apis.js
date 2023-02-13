// THIS IS GET API to do addition of list of numbers and return their sum

var express = require('express');
var app = express();

app.use(express.json());

app.post('/addition', (req, res) => {
    const numbers = req.body.numbers;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    res.send({ result: sum });
});
// THIS ANOTHER FOR Get API to do multiplication of an array of numbers and return the product.
app.post('/multiplication', (req, res) => {
    const array = req.body.array;
    let product = 0;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    res.send({ result: product });
});
app.listen(6974, () => console.log('Listening on port 6974'));


