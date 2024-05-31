import express from 'express'
const path = require('path');
const fs = require('fs');
const routes = express.Router()

const readJSONFile = (filename: string): any => {
  const filepath = path.join(__dirname, 'mocks', filename);
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
  const articleId = parseInt(req.params.id);
  const articleDetails = readJSONFile('mainArticles.json');
  const article = articleDetails.find((article: { id: number }) => article.id === articleId);

  if (article) {
    res.json(article)
  } else {
    res.status(404).send('Notícia não encontrada');
  }
})


export default routes