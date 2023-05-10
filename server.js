const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


app.use('/', require('./routes/root'));


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
        return;
    }
    else if (req.accepts('json')) {
        res.json({ message: '404 Not found' });
        return;
    }
    else {
        res.type('txt').send('404 Not found');
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
