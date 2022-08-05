var mongoose = require('mongoose'),
    app = require('./app'),
    port = '3700';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/propio_test')
    .then(() => {
        app.listen(port, () => {

        });
    })
    .catch(err => console.log(err));