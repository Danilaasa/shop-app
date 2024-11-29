"use client"
import styles from "./Logout.module.css"
import {logout} from "@/api/logout";
import Link from "next/link";

export const LogoutButton = () => {
    return (
        <Link href="/auth" onClick={e => logout()} className={styles.auth} >
            Logout
        </Link>
    )
}