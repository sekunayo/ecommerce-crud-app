import React from 'react'
import { styles } from './styles';
import { useSelector } from 'react-redux';

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import { data } from "../../mock/data"
import { RootState } from '../../store';

const Shop = () => {
    const cartValue = useSelector((state: RootState) => state.cart.value);

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
                                <ProductCard element={element} key={index + 1} />
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