import styles from "./SearchBar.module.css"
import { Poppins } from "next/font/google";
import classNames from "classnames";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export const SearchBar = () => {
    return (
        <div className={classNames(styles.castom_input, poppins.className)} >
            <input className={styles.search_bar} placeholder="Search" type="text"/>
        </div>
    )
}