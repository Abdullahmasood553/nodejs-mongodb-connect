const express = require('express');
const router = express.Router();

// Bring in Models
let Article = require('../models/article');

// router.get('/', (req, res) => res.send('Hello'));
// router.get('/', (req, res) => res.render('index'));

router.get('/', (req, res) => {

    Article.find({}, (err, articles) => {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {
                title: 'Articles',
                articles: articles
            });
        }
    });
//    let articles = [
//     {
//         id:1,
//         title: 'Article One',
//         author: 'Abdullah'
//     },
//     {
//         id:2,
//         title: 'Article Two',
//         author: 'Haseeb'
//     },
//     {
//         id: 3,
//         title: 'Article Three',
//         author: 'Adil'
//     }
// ];
    // res.render('index', {
    //     title: 'Articles',
    //     articles:articles
    // });


    // Add Submit POST Route

});



// Get Single Article
router.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        //  console.log(article);
        //  return;
        res.render('article', {
            article: article,
            title: 'Article'
        });
    });
});

router.post('/articles/add', (req, res) => {
    // console.log('Submitted');
    // return;
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save((err) => {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});


// Load Edit Form
router.get('/article/edit/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('edit_article', {
            article: article,
            title: 'Edit Article'
        });
    });
});

// Update Submit Post Route
router.post('/article/edit/:id', (req, res) => {
    // console.log('Submitted');
    // return;
    let article = {};

    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    let query = {_id:req.params.id}

    Article.update(query, article, (err) => {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});



router.delete('/article/:id', (req, res) => {
    let query = {_id: req.params.id}
    Article.remove(query, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('Success');
    });
});

module.exports = router;