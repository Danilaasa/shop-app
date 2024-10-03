"use server"


import {Basket, Product} from "@/api/types";

export async function getProducsInBasket():Promise<Basket> {
    return fetch("http://localhost:8000/products").then((data) => data.json())
}

export async function checkProductInBasket(id: number):Promise<boolean> {
    const { products } = await getProducsInBasket()
    const product = products.find((product) => product.id === id)
    if (product && product !== null) {
        return true
    } else {
        return false
    }

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

export async function deleteProduct(Article: Product) {
    await fetch("http://localhost:8000/products/delete", {
        method: "POST",
        body: JSON.stringify({
            id: Article.id
        }),
        headers: {
            "Content-type": "application/json"
        }
    }
    )
}