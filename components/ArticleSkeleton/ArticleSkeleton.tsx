import { FC, ReactNode } from "react"
import styles from "./ArticleSkeleton.module.css"
import classNames from "classnames"
export const ArticleSkeleton = ():ReactNode => {
    return (
        <article className={styles.card} id="card-link">
            <div className={styles.card__body}>
                <div className={classNames(styles.card__body, styles.body__img)}>
                    <img className={styles.skeleton} alt="" id="cover-img" />
                </div>
            </div>

            <div className={styles.card__footer} id="card-footer">
                <div className={classNames(styles.skeleton, styles.skeleton_text, styles. skeleton_footer)} ></div>
                <div className={classNames(styles.skeleton, styles.skeleton_text, styles. skeleton_footer)} ></div>
                <div className={classNames(styles.skeleton, styles.skeleton_text, styles. skeleton_footer)} ></div>
            </div>
        </article>
    )
}