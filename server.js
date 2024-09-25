/* eslint-disable */
const express = require("express")
const app = express()
let products = []
app.use(express.json())
app.post("/products", (req, res) => {
    if (req.body) {
        products.push({
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.body.image,
            rating: req.body.rating
        })
        res.status(201).json({ message: "Product added" });
    } else {
        res.status(201).json({message: "basket cleaned"})
    }
})

app.post("/products/clear", (req, res) => {
    products=[]
    res.status(201).json({message: "basket cleaned"})
})



app.get("/products", (req, res) => {
    if (Object.keys(req.query).length === 0) {
        res.json({ count: products.length, products })
    }
})

const server = app.listen(8000, () => {
    console.log("server start")
})

app.use((err) => {
    console.error(err.stack)
})

server.setTimeout(60000)
