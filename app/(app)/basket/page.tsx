"use client"
import Cookies from "js-cookie";
import {redirect} from "next/navigation";
import { getProducsInBasket } from "@/api/basket";
import {useEffect, useState} from "react";
import {Product} from "@/api/types";

export default function Basket() {
    const [articles, setArticles] = useState<Product[]>([])

    useEffect(() => {
        getProducsInBasket().then((data) => {
            setArticles(data.products)
        })
    }, [])

    return (
        Cookies.get("JWT")?.length
            ?
            <div>
                {articles.map((article) => {
                    return (
                        <h1 key={article.id} >
                            {article.title}
                        </h1>
                    )
                })}

            </div>
            : redirect("/auth")
    )
}