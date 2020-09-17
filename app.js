const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articleApp', { useNewUrlParser: true,useUnifiedTopology: true });
let db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('Connected to mongodb');
});

// Check for db errors
db.on('error', (err) => {
    console.log(err);
});

// Init App
const app = express();


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'));

// app.get('/', () => {
//     res.send('Hello World');
// });
const PORT = process.env.PORT || 5000;

// app.listen(3000, () => {
//     console.log(`Server running on port 3000`);
// });

app.listen(5000, console.log(`Server started on port ${PORT}`));