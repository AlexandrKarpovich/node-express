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

const   homeRoutes = require('./routes/home'),
        aboutRoutes = require('./routes/about')
        coursesRoutes = require('./routes/courses'),
        addRoutes = require('./routes/add')


const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/courses', coursesRoutes)
app.use('/add', addRoutes)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})