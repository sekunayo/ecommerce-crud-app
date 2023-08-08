import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import { styles } from './styles';
import { data } from "../../mock/data"

const Shop = () => {
    return (
        <div className={styles.shop}>
            <Header />
            <h4 className={styles.shopHeading}>Shop</h4>
            {/* <div style={{ width: "100%", display: "flex", justifyContent: "center" }}> */}
            <div className={styles.shopListContainer}>
                <div className={styles.shopList}>
                    {
                        data.map((element, index) => {
                            return (
                                <ProductCard id={element?.id} price={element.price} name={element.name} image={element.image} key={index + 1} />
                            )
                        })
                    }
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Shop