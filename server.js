const express = require('express')
const app = express()

app.get('/names', (req, res)=>{
    res.send('Abel')
})

app.listen(5000, ()=>{
    console.log("Server ia running on port 5000");
})