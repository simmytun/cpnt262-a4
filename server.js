const path = require('path');
const express = require('express');
const ejs = require('ejs');

const music = require('./music');

const app = express();

app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));

// parse all the requests for url encoded form data. 
app.use(express.urlencoded({ extended: true}));




// page rendering - home
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'music', current: 'home_page'});
});


// page rendering - gallery
app.get('/gallery', (req, res) => {
  res.render('pages/gallery', { title: 'Gallery', current: 'gallery_page'});
});


// page rendering - subscribe
app.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', { title: 'Subscribe', current: 'subscribe_page'});
  
  
});

// form sumbit post
app.post('/subscribers',function(request,response){
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p>`);
});

// json gallery endpoint 
app.get('/api/v0/gallery', (req, res) => {
  res.json(music);
});


// 404 message
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});