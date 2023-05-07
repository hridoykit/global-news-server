const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) =>{
    res.send('first trial');
});

app.get('/news-categories', (req, res) =>{
    res.send(categories);
});

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;

    if(id === '08'){//id_08 was empty, now show all news with if condition

        res.send(news);

    }else{

        const selectedCategory = news.filter(c => c.category_id === id);
        res.send(selectedCategory);
    }
    
});

app.get('/news', (req, res) =>{
    res.send(news);
});

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.listen(port);