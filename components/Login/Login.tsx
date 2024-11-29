"use client"
import styles from "./Login.module.css"
import Link from "next/link";


export const LoginButton = () => {

    return (
        <Link href="/auth" className={styles.auth} >
            Login
        </Link>
    )
}