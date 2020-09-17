const express = require('express');
const router = express.Router();

// router.get('/articles', (req, res) => res.send('Articles'));

//router.get('/add', (req, res) => res.render('add_article'));

router.get('/add', (req, res) => {
    res.render('add_article', {
        title: 'Add Article'
    });
});

module.exports = router;