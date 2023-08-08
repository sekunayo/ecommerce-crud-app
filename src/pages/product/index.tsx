import Header from '../../components/Header'
import { styles } from './styles'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { Button } from '../../components/Button'
import Badge from '../../components/Badge';
import { data } from "../../mock/data"
import ProductCard from '../../components/ProductCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Product = () => {
    const [currentElement, setCurrentElement] = useState<any>({});

    const { id } = useParams()

    const currentProduct = data?.find((element) => element?.id === id)

    useEffect(() => {
        setCurrentElement(currentProduct)
    }, [currentProduct])

    return (
        <div className={styles.product}>
            <Header />
            <div className={styles.productMain}>
                <div className={styles.productImageContainer}>
                    <div className={styles.productImage}>
                        <img src={currentElement?.image as string} alt="wristwatch" />
                    </div>
                </div>

                <div className={styles.productDescriptionContainer}>
                    <div className={styles.productDescription}>
                        <div className={styles.productDescriptionHeader}>
                            <h5 className={styles.productDescriptionHeaderText}>About Product</h5>
                        </div>
                        <div className={styles.productDescriptionText}>
                            <p className={styles.productDescriptionTextCaption}>{currentElement?.name} <span></span> {currentElement?.size}mm</p>
                            <div className={styles.productDescriptionTextPrice}>
                                <h4 className={styles.productDescriptionTextHeading}>{currentElement?.name} {currentElement?.category}</h4>
                                <p className={styles.productDescriptionTextPriceContent}>${currentElement?.price}</p>
                            </div>
                            <p className={styles.productDescriptionTextContent}>
                                {currentElement?.description}
                            </p>
                            <div className={styles.productDescriptionTextSizeContainer}>
                                <div className={styles.productDescriptionTextSize}>
                                    <p className={styles.productDescriptionTextCaption}>size:</p>
                                    {
                                        currentElement?.sizeRange?.map((element: any, index: number) => {
                                            return <Badge key={index + 1} active={Boolean(currentElement?.size === element)} label={`${element}`} />
                                        })
                                    }
                                </div>
                                <div className={styles.productDescriptionTextSize}>
                                    <p className={styles.productDescriptionTextCaption}>quantity:</p>
                                    <p>{currentElement?.quantity}</p>
                                </div>
                            </div>
                            <div className={styles.productDescriptionButton}>
                                <Button type="button" variant='primary' label="Add to cart" icon={<Plus />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productLikeItems}>
                <h4 className={styles.productLikeItemsHeading}>Which watch is right for you? </h4>
                <div className={styles.productLikeItemsList}>
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
            </div>
        </div >
    )
}

export default Product