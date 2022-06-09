import React from 'react'
import styles from './hero.module.scss'
import { WaveHeader }  from '../Wave/Wave'

const Hero = () => {
    return (
      <div className={styles.hero}>
         <div className="container__dark py-4">
           <div className="container">
              <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center py-md-5">
                <div className="order-md-1 ">
                  <div className={styles.hero__text}>
                    <div className="hero__text--content pe-4 text-end w-100">
                      <p>Hola, soy</p>
                      <h1 className={styles.hero__name}>Alba Lucía González</h1>
                      <a href="/archives/Alba-Resume.pdf"className={styles.hero__button}>
                        Curriculo
                      </a>
                    </div>
                  </div>
                </div>
              <img src='AlbaPortafolio.png' alt='Photo Alba Lucia Gonzalez' className={styles.hero__image}/>
            </div>
          </div>
        </div>
         
         <WaveHeader/>
         
      </div>
    )
}

export default Hero
