const express = require('express'),
        path = require('path'),
        exphbs = require('express-handlebars')
        // pug = require('pug'),
        // ejs = require('ejs');

// устанавливаем настройки для файлов layout
// app.engine(
//     'hbs',
//     expressHbs({
//       layoutsDir: 'views/layouts',
//       defaultLayout: 'layout',
//       extname: 'hbs',
//     })
// )

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set('views', 'views')



const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        isHome: true
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        isAbout: true
    })
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Courses',
        isCourses: true
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add courses',
        isAdd: true
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})