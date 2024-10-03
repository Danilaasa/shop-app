"use client"
import styles from './Header.module.css'
import {CheckJWT} from "@/components/AuthButton/AuthButton";



export const Header = () => {

    return (
        <header className={styles.header} >
            <h1 className={styles.h1} >ShopApp</h1>
            <div className={styles.utils} >
            
                {CheckJWT()}
            </div>
        </header>
    )
}