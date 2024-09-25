import {category, Product} from "@/api/types";

export const getCategories = (): Promise<category[]> => {
    return fetch("https://fakestoreapi.com/products/categories").then(res => res.json())
}

export const getAllProducts = (): Promise<Product[]> => {
    return fetch("https://fakestoreapi.com/products").then(res => res.json())
}
export const getProductsByCategory = (category: category): Promise<Product[]> => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json())
}

export const getSingleProduct = (id: string): Promise<Product> => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
}