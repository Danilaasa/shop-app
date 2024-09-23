"use client"
import {SearchBar} from "@/components/SearchBar/SearchBar";
import Link from "next/link"
import Cart from "../../public/cart.svg"
import styles from './Header.module.css'
import {CheckJWT} from "@/api/checkJWT";



export const Header = () => {

    return (
        <header className={styles.header} >
                <SearchBar />
            <div className={styles.utils} >
                <Link href="/basket">
                    <Cart />
                </Link>
                {CheckJWT()}
            </div>
        </header>
    )
}