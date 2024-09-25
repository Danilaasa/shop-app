"use client"
import Cookies from "js-cookie";
import {redirect} from "next/navigation";
import {getProducsInBasket, clearBasket} from "@/api/basket";
import {useEffect, useState} from "react";
import {Product} from "@/api/types";
import {Article} from "@/components/Article/Article";
import styles from "./basket.module.css"

export default function Basket() {
    const [articles, setArticles] = useState<Product[]>([])

    const clearProducts = () => {
        clearBasket()
        setArticles([])
    }


    useEffect(() => {
        getProducsInBasket().then((data) => {
            setArticles(data.products)
        })
    }, [])

    return (
        Cookies.get("JWT")?.length
            ?
            <div>
                <div className={styles.info} >
                    <h1>Товаров в корзине - {articles.length}</h1>
                    <button onClick={clearProducts} className={styles.button} >Очистить корзину</button>
                </div>
                <div className={styles.grid}>
                {articles.map((article) => {
                        return (
                            <Article key={article.id} article={article} />
                        )
                    })}
                </div>


            </div>
            : redirect("/auth")
    )
}