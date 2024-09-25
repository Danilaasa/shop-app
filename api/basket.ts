"use server"


import {Product} from "@/api/types";

export async function getProducsInBasket() {
    return fetch("http://localhost:8000/products").then((data) => data.json())
}

export async function addProductsInBasket(Article: Product) {
    await fetch("http://localhost:8000/products", {
        method: "POST",
        body: JSON.stringify({
            id: Article.id,
            title: Article.title,
            price: Article.price,
            category: Article.category,
            description: Article.description,
            image: Article.image,
            rating: Article.rating
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function clearBasket() {
    await fetch("http://localhost:8000/products/clear", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }
    })
}
