import styles from './Header.module.css'
import {cookies} from "next/headers";
import {LoginButton} from "@/components/Login/Login";
import {LogoutButton} from "@/components/Logout/Logout";



export const Header = () => {

    return (
        <header className={styles.header}>
        <h1 className={styles.h1} >ShopApp</h1>
            <div className={styles.utils}>
                {cookies().get("session") ? <LogoutButton />: <LoginButton />}
            </div>
        </header>
    )
}