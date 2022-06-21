import React from 'react'
import Entradas from './Entradas/Entradas'
import styles from './proyects.module.scss'

const Proyects = () => {
  return (
    <section className='container'>
        <div className={styles.proyects}>
          <h2 className={styles.Proyects__title}>
            Proyectos Recientes
          </h2>
          <Entradas/>
        </div>
    </section>
  )
}

export default Proyects