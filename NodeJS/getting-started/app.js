const express = require('express')

const app = express()

const port = '3000'

app.get('/ping', (request, response) => {
    response.json({message: 'pong'})
})

app.route('/url')
    .get(/*middleware(req, res, next),*/ (req, res, next) => {})
    .post((res, res, next) => {})
    .put((req, res, next) => {})
    .delete((req, res, next) => {})

app.listen(process.env.PORT || port, () => {
    console.log(`App listening in port ${port}`)
})