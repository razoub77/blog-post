import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', {posts: posts});
});

app.get('/create', (req, res) => {
  res.render('create.ejs');
});

app.post('/create', (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content
  }
  posts.push(post);
  res.redirect('/create');
});

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  const post = posts[id];
  res.render('edit.ejs', {id: id, post: post});
});

app.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  posts[id] = {
    title: req.body.title,
    content: req.body.content
  }
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});