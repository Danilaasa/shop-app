import {getSingleProduct} from "@/api/api";
import Image from "next/image";
import styles from "./product.module.css"

export default async function ProductPage({params}: {params: {id: string}}) {
    const product = await getSingleProduct(params.id)
    return (
        <div>
            <h1 className={styles.h1} >{product.title}</h1>
            <div className={styles.product} >
                <div className={styles.image_cont} >
                    <Image height={300} width={250} src={product.image} alt={"Фото товара"} />
                </div>
                <div className={styles.info} >
                    <div className={styles.p} >
                        <h4>description:</h4> <span>{product.description}</span>
                    </div>
                    <div className={styles.p} >
                        <h4>price:</h4> <span>{product.price}$</span>
                    </div>
                    <div className={styles.p} >
                        <h4>category:</h4> <span>{product.category}</span>
                    </div>

                </div>
            </div>
        </div>

    )
}