const express = require('express');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'hbs');



app.get('/', function(req,res){
    res.render('home')
});

// =================  Sin hbs ==================
// app.get('/', function (req, res){
//     res.send('Home Page')
// });
// app.get('/generic', function(req,res){
//     res.sendFile(__dirname + '/public/generic.html')
// });
// app.get('/elements', function(req,res){
//     res.sendFile(__dirname + '/public/elements.html')
// });
// ==================================================

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(3002)

console.log('Escuchando el puerto:', 3002)


