const express = require('express')
const app = express()
const compression = require ('compression');
const axios = require('axios')
const path = require('path')
const port = 3000

app.use(compression())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get("/api/:id/reviews", (req, res) => {
    axios.get(`http://ec2-34-217-89-110.us-west-2.compute.amazonaws.com:3001/api/${req.params.id}/reviews`)
    .then (response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log('review error')

    })
})

app.get("/api/images/:productId", (req, res) => {
    axios.get(`http://ec2-18-236-153-219.us-west-2.compute.amazonaws.com:3002/api/images/${req.params.productId}`)
    .then (response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log('slide show error')
  
    })
})

app.get("/reviews/main.bundle.js", (req, res) => {
    axios.get("http://ec2-34-217-89-110.us-west-2.compute.amazonaws.com:3001/main.bundle.js")
    .then (response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log(error)
  
    })
})

app.get("/slide-show/vendor.bundle.js", (req, res) => {
    axios.get("http://ec2-18-236-153-219.us-west-2.compute.amazonaws.com:3002/vendor.bundle.js")
    .then (response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log(error)
  
    })
})

app.get("/slide-show/main.bundle.js", (req, res) => {
    axios.get("http://ec2-18-236-153-219.us-west-2.compute.amazonaws.com:3002/main.bundle.js")
    .then (response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log(error)
  
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))