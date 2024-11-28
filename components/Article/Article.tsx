import styles from "./Article.module.css";
import Link from "next/link";
import Image from "next/image";
import Star from "@/public/Star.svg";
import {Product} from "@/api/types";
import dynamic from "next/dynamic";
const AddToCart = dynamic(() => import("../AddToCardButton/AddToCard"), 
{   loading: () => <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>, 
    ssr: false 
})









export function Article({ article }: { article: Product }) {

    
    return (
        <article className={styles.article}>
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
                                <AddToCart Article={article}  />
                              
                                
                </div>
            </div>
        </article>
    )
}

