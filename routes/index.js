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
});

module.exports = router;