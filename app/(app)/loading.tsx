import { ArticleSkeleton } from "@/components/ArticleSkeleton/ArticleSkeleton"
import styles from "./page.module.css"
import classNames from "classnames"
export default function Loading() {
    return (
    <div className={styles.main_page} > 
        <div className={classNames(styles.skeleton, styles.skeleton_text, styles.skeleton_footer)}> </div>
        {/*<div className={classNames(styles.skeleton, styles.skeleton_text, styles.skeleton_footer)}> </div>*/}
        <div className={styles.grid} >
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
        </div>
    </div>
    )
}