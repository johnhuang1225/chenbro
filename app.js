const express = require('express');


const port = process.env.PORT || 3000;
const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


// 出差膳雜費計算
app.get('/agentflow/calculate', function(req, res) {
    res.render('calculate');
});

app.listen(port, function() {
    console.log(`Server started on port: ${port}`);
});