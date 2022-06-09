import styles from './entradas.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Entradas = () => {
  return (
    <div className={styles.entrada}>
        <div className={styles.entrada__content}>
           <a href="https://historiadesign.co/">
            <img
               className={styles.entrada__image}
               src='/img/Web-responsive-historia.png' 
               alt='Icon Email'
            />
            <div className={styles.entrada__text}>
               <h5 className={styles.entrada__title}>
                  Historia</h5>
               <p className={styles.entrada__description}>
               Diseño creado en figma, implementacion en WordPress
               </p>
            </div>
           </a>
        </div>
        <div className={styles.entrada__content}>
           <a href="https://tucafedelmercado.com/">
            <img
               className={styles.entrada__image}
               src='/img/Web-responsive-cafeMercado.png' 
               alt='Icon Email'
            />
            <div className={styles.entrada__text}>
               <h5 className={styles.entrada__title}>
                  Café del Mercado</h5>
               <p className={styles.entrada__description}>
               Implementacion en WordPress
               </p>
            </div>
           </a>
         </div>
         <div className={styles.entrada__content}>
            <a href="https://waseskun.net/">
               <img
                  className={styles.entrada__image}
                  src='/img/Web-responsive-wassekun.png' 
                  alt='Icon Email'
               />
               <div className={styles.entrada__text}>
                  <h5 className={styles.entrada__title}>
                     Waseskun</h5>
                  <p className={styles.entrada__description}>
                  Diseño creado en figma, implementacion en WordPress
               </p>
            </div>
            </a>
         </div>
    </div>
  )
}

export default Entradas