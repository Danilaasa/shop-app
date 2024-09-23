import {getAllProducts} from "@/api/api";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
import Star from "../../public/Star.svg"
import Cart from "../../public/AddToCart.svg"

export default async function Home() {
  const products = await getAllProducts()
  return (
    <div className={styles.main_page} >
      <h1>All Products</h1>
      <div className={styles.grid} >
          {products.map((article) => {
              return (
                  <article className={styles.article} key={article.id}>
                      <Link href={`/product/${article.id}`} className={styles.image_cont}>
                          <Image className={styles.image} height={250} width={220} src={article.image}
                                 alt="Фото продукта"/>
                      </Link>
                      <hr className={styles.line} />
                      <div className={styles.article_info}>
                          <h4 className={styles.title} >{article.title}</h4>
                          <span className={styles.price} >{`$ ${article.price}`}</span>
                          <div className={styles.rating} >
                              <span className={styles.rating_number} >
                                  <Star />
                                  {`${article.rating.rate}(${article.rating.count})`}
                              </span>
                              <span className={styles.tag} >
                                <Cart className={styles.icon} />
                              </span>
                          </div>
                      </div>
                  </article>
              )
          })}
      </div>
    </div>
  );
}
