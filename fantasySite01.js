const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/fantasySite01.html'))
})

app.get('/LeagueLeaders', (req, res) => {
    res.sendFile(path.join(__dirname, '/leagueLeaders.html'))
})

const port = 4028

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})