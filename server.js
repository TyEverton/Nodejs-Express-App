const express = require('express') //calls the express library and gives us access to the library
const app = express() //instance of express
const chalk = require('chalk')
const debug = require('debug')('server')
const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3000
const sessionsRouter = require('./src/router/sessionsRouter')
const adminRouter = require('./src/router/adminRouter')

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/sessions', sessionsRouter)
app.use('/admin', adminRouter)

app.get('/', (req, res) => {
  res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] })
})

app.listen(PORT, () => {
  debug(`to port ${chalk.blue(PORT)}`)
})
