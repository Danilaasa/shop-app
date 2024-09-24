import { getProductsByCategory } from "@/api/api";
import styles from "./category.module.css"
import { CategoriesTitles } from "../../../../utils/utils"
import {Article} from "@/components/Article/Article";

export default async function CategoryPage({ params }: { params: { categoryName: "electronics" | "jewelery" | "men" | "women" } }) {
    const categoryProducts = await getProductsByCategory(CategoriesTitles[params.categoryName])




    return (
        <div className={styles.page_title} >
            <h4 className={styles.category_title} >{`Category / ${CategoriesTitles[params.categoryName][0].toUpperCase()}${CategoriesTitles[params.categoryName].slice(1).toLowerCase()}`}</h4>
            <h2>{`${CategoriesTitles[params.categoryName][0].toUpperCase()}${CategoriesTitles[params.categoryName].slice(1).toLowerCase()} - Weekly Update.`}</h2>
            <div className={styles.grid} >
                {categoryProducts.map((article) => {
                    return (
                        <Article key={article.id} article={article} />
                    )
                })}
            </div>

        </div>

    )
}