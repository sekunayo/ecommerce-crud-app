import React from 'react'
import { styles } from './styles'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

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
            </button>
        </header >


    )
}

export default Header;