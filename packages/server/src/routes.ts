import express from 'express'
const path = require('path');
const fs = require('fs');
const routes = express.Router()

const readJSONFile = (filename) => {
  const filepath = path.join(__dirname, 'data', filename);
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
};

routes.get('/api/main-articles', (req, res) => {
  const mainArticles = readJSONFile('mainArticles.json');
  res.json(mainArticles);
})

routes.get('/api/secondary-articles', (req, res) => {
  const secondaryArticles = readJSONFile('secondaryArticles.json');
  res.json(secondaryArticles);
})

routes.get('/api/articles/:id', (req, res) => {
  const articleId = req.params.id;
  const articleDetails = readJSONFile('articleDetails.json');
  const article = articleDetails[articleId];

  if (article) {
    res.json(article)
  } else {
    res.status(404).send('Notícia não encontrada');
  }
})

export default routes