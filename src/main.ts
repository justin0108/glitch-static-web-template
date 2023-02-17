import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express';

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

// pure static html page
// http://localhost:4000/mypublic.html
// index page (ejs template)
// http://localhost:4000
app.get('/', function(req: express.Request, res: express.Response): void {
    const metaInfo = {
        title: 'My Title',
        message: 'Hello world',
    };

    res.render('mytemplate', { metaInfo });
});

const port = process.env.PORT || 3000;
console.log(`app listening on ${port}`);
app.listen(port);
