import React from 'react'
import styles from './sliderData.module.scss'

export const SliderData_1 = () => {
  return (
    <div className={styles.sliderData}>
      <img 
        className={styles.sliderData__image}
        src='/img/Nathan.png' 
        alt="Photo testimonial Nathan" 
      />
        <div className={styles.sliderData__text}>
          <p>{'"'}I have hired Alba for two separate projects and came away 
            impressed by her level of expertise and efficiency each time. 
            She was always there to help and to correct any changes that 
            were necessary. I am confident to recommend her to others and 
            I won{"'"}t hesitate to ask for her assistance in a variety of 
            matters. Thanks Alba!.{'"'}
          </p>
          <p className={styles.sliderData__text_name}>
            Teacher Nathan
          </p>
        </div>
    </div>
  )
}

export const SliderData_2 = () => {
  return (
    <div className={styles.sliderData}>
      <img 
        className={styles.sliderData__image}
        src='/img/CafeMercado.png' 
        alt="Foto testimonial cafe del mercado" 
      />
        <div className={styles.sliderData__text}>
          <p>{'"'}Alba González es una excelente profesional diseño y puso en 
            marcha nuestra pagina web tucafedelmercado.com la cual nos 
            ayudó a mejorar las ventas hasta en un 50%, es una página muy 
            fácil de entender, con un manejo de diseño muy versátil el 
            cual hace que nuestros clientes no tengan dudas al hacer una 
            compra.{'"'}
          </p>
          <p className={styles.sliderData__text_name}>
            Café del Mercado
          </p>
        </div>
    </div>     
  )
}



