import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Button } from '../../components/Button'
import Slides from '../../components/Slides'
import { slides } from '../../mock'
import { motion } from "framer-motion";
import Header from '../../components/Header'


const Home = () => {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    // const [position, setPosition] = useState(0);

    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         if (position > (slides.length - 1)) {
    //             setPosition(slides.length - 1)
    //         }
    //         else if (position < 0) {
    //             setPosition(0)
    //         }
    //         else {
    //             setPosition((position) => position + 1)
    //         }
    //     }, 2000)

    //     return (() => {
    //         clearInterval(timer)
    //     })
    // }, [position])

    return (
        <main className={styles.home}>
            <Header />
            <div className={styles.homeMainContainer}>
                <div className={styles.homeMain}>
                    {
                        slides.map((element, index) => {
                            return (
                                <Slides key={index + 1} {...element} />
                            )
                        })
                    }
                    {/* <Slides description= /> */}
                </div>
            </div>


        </main>
    )
}

export default Home