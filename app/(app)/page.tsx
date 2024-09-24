import {getAllProducts} from "@/api/api";
import styles from "./page.module.css"
import {Article} from "@/components/Article/Article";

export default async function Home() {
    const products = await getAllProducts()
  return (
    <div className={styles.main_page} >
      <h1>All Products</h1>
      <div className={styles.grid} >
          {products.map((article) => {
              return (
                  <Article key={article.id} article={article}/>
              )
          })}
      </div>
    </div>
  );
}
