var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
  title: 'article-one | Sai Anish',
  heading: 'Article-one',
  date: 'Aug 11, 2017',
  content: ` <p>
            This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.
        </p>
        <p>
            This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.
        </p>
        <p>
            This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.This is the content of Article one.
        </p>`
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, intial-scale=1" />
    <link rel="stylesheet" type="text/css" href="ui/style.css">
</head>
<body>
<div class="container">
    <div>
        <a href="/">Home</a>
        <hr/>
        <h3>${heading}</h3>
    </div>
    <div>
        ${date}
    </div>
    <div>
    ${content}
    </div>
    </div>
</body>

</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function(req, res){
  res.send(createTemplate(articleone));
});
app.get('/article-two', function(req, res){
   res.send('This is article-two.');
});
app.get('/article-three', function(req, res){
   res.send('This is article-three.');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
