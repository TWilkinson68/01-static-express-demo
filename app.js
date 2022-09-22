const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get('/news', (req, res) =>
    res.send('<p>some text</p>')
)

app.use((req, res, next)=>{
    res.status(404).send("Sorry no page can be found")
})

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
