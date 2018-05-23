const express= require('express');

var exphbs = require('express-handlebars');
const app = express();
const paginate = require('express-paginate');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let videos = [{video:"https://www.youtube.com/watch?v=Ef-mxjYkllw&t=577s"}, {video:"https://www.youtube.com/watch?v=nhy4Z_32kQo"},{video:"https://www.youtube.com/watch?v=ciM6wigZK0w"}
];

app.get('/', function(req,res){

  res.render('home',{videos});
})
app.listen(3000, function(req,res){
    console.log('listening on port 3000');
})
