import styles from "./Basket.module.css"
import classNames from "classnames"

export default function Loading() {
    return (
        <div>
            <div className={styles.info} >
            <div className={classNames(styles.skeleton, styles.skeleton_text, styles.skeleton_footer)} ></div>
            </div>
        </div>
    )
}