import styles from './PostTemplate.module.scss'

const PostTemplate = () => {
  return (
    <div>
        <div className={styles.postTemplate}>
               <div className={styles.postTemplate__content}>
                  <a href="https://plantilla-tienda-muebles.netlify.app/index.html">
                     <img
                        className={styles.postTemplate__image}
                        src='/img/tiendaMuebles.png' 
                        alt='Icon Email'
                     />
                     <div className={styles.postTemplate__text}>
                        <h5 className={styles.postTemplate__title}>
                        </h5>
                        <p className={styles.postTemplate__description}>
                           Diseño en HTML CSS JavaScript, ideas de diseño para paginas 
                           de WordPress
                        </p>
                     </div>
                  </a>
               </div>
               <div className={styles.postTemplate__content}>
                  <a href="https://plantilla-audifonos.netlify.app/">
                     <img
                        className={styles.postTemplate__image}
                        src='/img/audifonos.png' 
                        alt='Icon Email'
                     />
                     <div className={styles.postTemplate__text}>
                        <h5 className={styles.postTemplate__title}>
                        </h5>
                        <p className={styles.postTemplate__description}>
                           Diseño en HTML CSS JavaScript, ideas de diseño para paginas 
                           de WordPress
                        </p>
                     </div>
                  </a>
               </div>
               <div className={styles.postTemplate__content}>
                  <a href="https://plantilla-guitarla.netlify.app/">
                     <img
                        className={styles.postTemplate__image}
                        src='/img/guitarLA.png' 
                        alt='Icon Email'
                     />
                     <div className={styles.postTemplate__text}>
                        <h5 className={styles.postTemplate__title}>
                           </h5>
                        <p className={styles.postTemplate__description}>
                           Diseño en HTML CSS JavaScript, ideas de diseño para paginas 
                           de WordPress
                        </p>
                     </div>
                  </a>
               </div>
          </div>
    </div>
  )
}

export default PostTemplate