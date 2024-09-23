import { getProductsByCategory } from "@/api/api";
import styles from "./category.module.css"
import { CategoriesTitles } from "../../../../utils/utils"
import Link from "next/link";
import Image from "next/image";
import Star from "@/public/Star.svg";
import {AddToCart} from "@/components/AddToCardButton/AddToCard";

export default async function CategoryPage({ params }: { params: { categoryName: "electronics" | "jewelery" | "men" | "women" } }) {
    const categoryProducts = await getProductsByCategory(CategoriesTitles[params.categoryName])




    return (
        <div className={styles.page_title} >
            <h4 className={styles.category_title} >{`Category / ${CategoriesTitles[params.categoryName][0].toUpperCase()}${CategoriesTitles[params.categoryName].slice(1).toLowerCase()}`}</h4>
            <h2>{`${CategoriesTitles[params.categoryName][0].toUpperCase()}${CategoriesTitles[params.categoryName].slice(1).toLowerCase()} - Weekly Update.`}</h2>
            <div className={styles.grid} >
                {categoryProducts.map((article) => {
                    return (
                        <article className={styles.article} key={article.id}>
                            <Link href={`/product/${article.id}`} className={styles.image_cont}>
                                <Image className={styles.image} height={250} width={220} src={article.image}
                                       alt="Фото продукта"/>
                            </Link>
                            <hr className={styles.line}/>
                            <div className={styles.article_info}>
                                <h4 className={styles.title}>{article.title}</h4>
                                <span className={styles.price}>{`$ ${article.price}`}</span>
                                <div className={styles.rating}>
                              <span className={styles.rating_number}>
                                  <Star/>
                                  {`${article.rating.rate}(${article.rating.count})`}
                              </span>
                                    <AddToCart  />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>

        </div>

    )
}