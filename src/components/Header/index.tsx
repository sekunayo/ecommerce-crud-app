import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { styles } from './styles'

import CartHeaderItem from '../CartHeaderItem'

import { RootState } from '../../store'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'


const Header = () => {
    const cartValue = useSelector((state: RootState) => state.cart.value)

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/")
    };

    const handleGoCart = () => {
        navigate("/cart")
    };

    return (

        <header className={styles.header}>
            <button type="button" onClick={handleGoHome} className={styles.headerLogo}>
                <Logo />
                <p>Grace's Shop</p>
            </button>
            <nav className={styles.headerNavigation}>
                <ul className={styles.headerNavigationList}>
                    <li>
                        <Link className={styles.headerNavigationListItem} to="/">Home </Link>
                    </li>
                    <li>
                        <Link className={styles.headerNavigationListItem} to="/shop">Shop </Link>
                    </li>
                    <li className={styles.headerNavigationListItem}>
                        Contact
                    </li>
                </ul>
            </nav>
            <button type="button" onClick={handleGoCart} className={styles.headerCartLogo}>
                <Cart />
                <div className={styles.headerCartLogoContent}>
                    {cartValue.length}
                </div>
                {/* <div className={styles.headerCartList}>
                    <h5 className={styles.headerCartListHeader}>Your Cart</h5>
                    <hr className={styles.headerHorizontalLine} />
                    {
                        cartValue?.map?.((element, index) => {
                            return (
                                <CartHeaderItem key={index + 1} element={element} />
                            )
                        })
                
                    {/* <p className={styles.headerCartEmpty}>No products in the cart</p> 
            </div> */}
            </button>

        </header >


    )
}

export default Header;