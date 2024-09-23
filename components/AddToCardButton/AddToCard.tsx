"use client"
import Cart from "@/public/AddToCart.svg";
import styles from "./AddToCart.module.css"


export const AddToCart = () => {



    return (
        <span className={styles.tag}>
            <Cart className={styles.icon}/>
        </span>
    )
}