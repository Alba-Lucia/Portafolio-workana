import styles from './figmaPost.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const FigmaPost = () => {
  return (
   <div>
      <h2 className={styles.entrada__title}>Figma</h2>
         <div className={styles.entrada__container}>
            <div className={styles.entrada__content}>
               <a href="https://www.figma.com/file/0XIRTN0GbcE0ypVHxNJZDM/Waseskun?node-id=8%3A269">
                  <img
                     className={styles.entrada__image}
                     src='/img/wasekunFigma.png' 
                     alt='image Figma web Waseskun'
                  />
                  <div className={styles.entrada__text}>
                     <h5 className={styles.entrada__name}>
                        Waseskun</h5>
               </div>
               </a>
            </div>
            <div className={styles.entrada__content}>
               <a href="https://www.figma.com/file/7uiV3h6kWHqRHUKoyPZOv8/HistoriaDesign.co?node-id=0%3A1">
                  <img
                     className={styles.entrada__image}
                     src='/img/hitoriaFigma.png' 
                     alt='image Figma web Waseskun'
               />
               <div className={styles.entrada__text}>
                  <h5 className={styles.entrada__name}>
                     Historia
                  </h5>
               </div>
            </a>
            </div>
            <div className={styles.entrada__content}>
                  <a href="https://www.figma.com/file/MN71lkM1YAfgljHq7gq8Sn/Brochure?node-id=0%3A1">
                     <img
                        className={styles.entrada__image}
                        src='/img/ServimosQ.png' 
                        alt='image Figma web Waseskun'
                        />
                  <div className={styles.entrada__text}>
                     <h5 className={styles.entrada__name}>
                     ServimosQ
                     </h5>
                  </div>
               </a>
            </div>
         </div> 
   </div>
)
}

export default FigmaPost