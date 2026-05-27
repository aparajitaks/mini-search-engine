const express = require('express')
const app = express()

app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hellow")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
