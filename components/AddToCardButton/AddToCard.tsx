"use client"
import Cart from "@/public/AddToCart.svg";
import styles from "./AddToCart.module.css"
import {Product} from "@/api/types";
import {addProductsInBasket} from "@/api/basket";
import {FC} from "react";

interface IAddToCart{
    Article: Product
}


export const AddToCart:FC<IAddToCart> = ({ Article }) => {



    return (
        <button onClick={() => addProductsInBasket(Article)}  className={styles.tag}>
            <Cart className={styles.icon}/>
        </button>
    )
}