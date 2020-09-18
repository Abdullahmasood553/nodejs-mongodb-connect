const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');


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


// Body parser Middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', () => {
//     res.send('Hello World');
// });
const PORT = process.env.PORT || 5000;

// app.listen(3000, () => {
//     console.log(`Server running on port 3000`);
// });

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));