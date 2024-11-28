"use client"
import styles from "./Basket.module.css"
import { useState, useEffect } from "react"
import { Product } from "@/api/types"
import { clearBasket, getProducsInBasket } from "@/api/basket"
import { Article } from "../../../components/Article/Article"
import { useAppSelector } from "@/lib/BasketProducts/hooks"




export default function BasketPage() {
    const [articles, setArticles] = useState<Product[]>([])
    const state = useAppSelector(state => state.basket.products)


    const clearProducts = () => {
        clearBasket()
        setArticles([])
        articles.forEach((product) => {
            localStorage.removeItem(product.title)
        })
    }




    useEffect(() => {
        getProducsInBasket().then((data) => {
            setArticles(data.products)
        })

    }, [state])



    return (
        <div>
            <div className={styles.info} >
                <h1>Товаров в корзине - {articles.length}</h1>
                <button onClick={articles.length ? clearProducts: undefined} className={styles.button} >Очистить корзину</button>
            </div>
            <div className={styles.grid}>
            {articles.map((article) => {
                    return (
                        <Article key={article.id} article={article} />
                    )
                })}
            </div>


        </div>
        
    )
}