// Create web server
// 1. npm init -y
// 2. npm i express
// 3. node comment.js
// 4. http://localhost:3000
// 5. http://localhost:3000/api/comments

const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/api/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'comments.json'), (err, data) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(JSON.parse(data))
    })
})

app.post('/api/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'comments.json'), (err, data) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        const comments = JSON.parse(data)
        comments.push(req.body)
        fs.writeFile(path.join(__dirname, 'data', 'comments.json'), JSON.stringify(comments), (err) => {
            if (err) {
                res.status(500).send(err)
                return
            }
            res.send(comments)
        })
    })
})

app.listen(3000, () => {
    console.log('Server start on port 3000')
})