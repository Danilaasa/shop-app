"use client"
import Cookies from "js-cookie"
import Link from "next/link";
import styles from "./checkJWT.module.css"
import {useEffect, useState} from "react";


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
       onClient ? <button onClick={onAuthClick} className={styles.auth} >Logout</button> : <Link href="/auth" className={styles.auth} >Sign in/Sign up</Link>
   )
}