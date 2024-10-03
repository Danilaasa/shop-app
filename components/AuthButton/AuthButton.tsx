"use client"
import Cookies from "js-cookie"
import Link from "next/link";
import styles from "./AuthButton.module.css"
import {useEffect, useState} from "react";
import { Poppins } from "next/font/google";
import classNames from "classnames";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export const CheckJWT = () => {
    const [onClient, setOnClient] = useState(false)

    useEffect(() => {
        if (Cookies.get("JWT")?.length) {
            setOnClient(true)
        }

    }, [Cookies.get("JWT")])

    const onAuthClick = () => {
        Cookies.remove("JWT")
        setOnClient(false)
    }


   return (
       onClient ? <button onClick={onAuthClick} className={classNames(styles.auth, poppins.className)} >Logout</button> : <Link href="/auth" className={styles.auth} >Sign in/Sign up</Link>
   )
}