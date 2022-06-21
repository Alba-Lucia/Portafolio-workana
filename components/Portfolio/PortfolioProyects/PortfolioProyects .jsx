import React from 'react'
import Entradas from './WebSite/Entradas'
import styles from './PortfolioProyects.module.scss'
import FigmaPost from './Figma/FigmaPost'
import Ilustrator from './Ilustrator/FigmaPost'

const Proyects = () => {
  return (
    <section className='container'>
        <div className={styles.PortfolioProyects}>
          <h2 className={styles.PortfolioProyects__title}>
            Proyectos Recientes
          </h2>
          <ul className={styles.PortfolioProyects__items}>
            <li className={styles.PortfolioProyects__item}>WordPres</li>
            <li className={styles.PortfolioProyects__item}>Figma </li>
            {/* <li className={styles.PortfolioProyects__item}>React</li> */}
            <li className={styles.PortfolioProyects__item}>Photoshop / Ilustrator</li>
          </ul>
          <div className={styles.PortfolioProyects__content}>
            <Entradas/>
          </div>
          <div className={styles.PortfolioProyects__content}>
            <FigmaPost/>
          </div>
          <div className={styles.PortfolioProyects__content}>
            <Ilustrator/>
          </div>
        </div>
    </section>
  )
}

export default Proyects