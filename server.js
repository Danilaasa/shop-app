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
            image: req.body.image
        })
    } else {
        res.status(400).json({message: "product not added"})
    }
})
app.get("/products", (req, res) => {
    if (Object.keys(req.query).length === 0) {
        res.json({ count: products.length, products })
    }
})

app.listen(8000, () => {
    console.log("server start")
})