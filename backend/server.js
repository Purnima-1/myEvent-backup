const express = require('express')
const events = require('./data/events')
const app = express()
const port = 5000;

app.get('/api/events', (req,res) => {
    res.json(events)
})

app.get('/api/events/:id', (req,res) =>{
    const event = events.find((e)=> e._id === req.params.id);
    res.json(event);
})

app.listen(port, console.log(`Server is running at port ${port}`))