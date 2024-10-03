"use client"
import Cart from "@/public/AddToCart.svg";
import styles from "./AddToCart.module.css"
import {Product} from "@/api/types";
import {addProductsInBasket, deleteProduct } from "@/api/basket";
import {useState} from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Agree from "../../public/Agree.svg"
import Cross from "../../public/Cross.svg"
import { useRouter } from "next/navigation";



export default function AddToCart({ Article }: { Article: Product }) {
    const [buttonChangeStyle, setButtonChangeStyle] = useState<boolean>(false)
    const pathaname = usePathname()
    const router = useRouter()



    const AddToCart = () => {
        addProductsInBasket(Article)
        setButtonChangeStyle(true)
        if (typeof window !== undefined) {
            localStorage.setItem(`${Article.title}`, Article.id.toString())
        }
        
    }

    const deleteCart = () => {
        if (typeof window !== undefined) {
            localStorage.removeItem(Article.title)
        }
        deleteProduct(Article)
        router.refresh()
    }


    return (
        (pathaname === "/" || pathaname.startsWith("/category/")) && localStorage.getItem(Article.title) === Article.id.toString() ? 
        <button className={classNames(styles.accept, styles.tag)} >
            <Agree className={styles.icon} />
        </button> : ((pathaname === "/" || pathaname.startsWith("/category/")) && !localStorage.getItem(Article.title) ? 
        <button onClick={AddToCart} className={classNames(styles.tag, {
                 [styles.accept]: buttonChangeStyle
             })} >
                <Cart className={styles.icon} />
        </button> : <button onClick={deleteCart} className={classNames(styles.tag, styles.delete)} >
                <Cross className={styles.cross} />
        </button>)

    )
}