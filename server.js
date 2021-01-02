// import express from "express"
// import cors from "cors"
// import bodyParser from "body-parser"
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const template = fs.readFileSync(`${__dirname}/dist/index.html`, 'utf8') // stupid simple template.
const ReactDOMServer = require('react-dom/server')

const App = require('./dist/index.bundle.js')

const app = express()

app.use(cors())
app.use(express.static('dist'));
app.use(bodyParser.json({ strict: false }))

console.warn("하이 컴포넌트 여긴")

app.get('/*', (req, res) => {
  const props = {}
  App.default(req.url, props).then((reactComponent) => {
    const result = ReactDOMServer.renderToString(reactComponent)
    console.warn("하이 컴포넌트", result)
    const html = template.replace('{{thing}}', result).replace('{{props}}', JSON.stringify(props))
    console.warn("하이 HTML", html)

    res.send(html)
    res.end()
  }).catch(console.error)
});

module.exports = app;
