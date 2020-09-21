const app = require('./server/server')
// const es6Renderer = require('express-es6-template-engine')

// // app.set('view engine', 'ejs')
// // app.set('views', path.join(__dirname,'/views'))
// // var path = require('path');
// // app.use(express.static(__dirname + '/public'));


// app.engine('html', es6Renderer);
// app.set('views', 'views');
// app.set('view engine', 'html');

app.server.listen(3000, () => console.log('App started'))
