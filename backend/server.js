const express = require('express')
const events = require('./data/events')
const app = express()
const port = 5000;

app.get('/api/events', (req,res) => {
    res.json(events)
})

// app.listen(console.log(`Server is running at port ${port}`));
app.listen(port, console.log(`Server is running at port ${port}`))