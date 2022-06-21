import React, {useEffect, useRef} from 'react'
import { SliderData_1, SliderData_2, SliderData_3 } from './SliderData/SliderData';
import styles from './sliderShow.module.scss'

const SliderShow = () => {

  const slideShow = useRef(null);
  // Intervalo atoplay
  const intervaloSlideshow = useRef(null);

  /***** Boton siguiente  ******/

  const siguiente = () => {
    // Comprobar que el slider tenga elementos
    if(slideShow.current.children.length > 0){
      // Obtener el primer elemento del slideShow
      const primerElement = slideShow.current.children[0];

      // Establecer la transicion para el slideshow
      slideShow.current.style.transition = `1000ms ease-out all`;

      const tamanoSlide = slideShow.current.children[0].offsetWidth;

      // Moverel slidershow
      slideShow.current.style.transform = `translateX(-${tamanoSlide}px)`;

      const transicion = () =>{
        // Reiniciamos la posicion del slide
        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final
        slideShow.current.appendChild(primerElement);

        // evita que el slider se devuelva al primero al dar reverse
        slideShow.current.removeEventListener('transitionend', transicion);
      }

      // Eventlistener para cuando termine la animacion.
      slideShow.current.addEventListener('transitionend', transicion);
    }
  }
  
  /**** Boton anterior  ****/
  const anterior = () => {
    if(slideShow.current.children.length > 0){
      //Obtener el ultimo elemento del slideshow
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);
      slideShow.current.style.transition = 'none';

      const tamanoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamanoSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `1000ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30)
    }
  }
    
  /* Auto Play */
 useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 6000);

    // Eliminar los intervalos al pasar el cursor
    slideShow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideshow.current);
    });

    // Volver a reanudar el auto play
    slideShow.current.addEventListener('mouseleave', () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, 6000);
    });
 }, []);

  return (
    <section className={`container ${styles.slide}`}>
      <h2 className={styles.slide__title}>Testimonio</h2>
        <div 
          className={styles.slide__content} 
          ref={slideShow}
        >
          <div className={styles.slide__container}>
              <SliderData_1/>
          </div>
          <div className={styles.slide__container}>
                <SliderData_2/>
          </div>
          <div className={styles.slide__container}>
                <SliderData_3/>
          </div>
      </div>
      <div className={styles.slide__controls}>
        <button 
          className={`${styles.slide__button} ${styles.slide__button_left}`}
          onClick={anterior}
        >
          <img src="/icon/icon-left-thin.svg" alt="" />
        </button>
        <button 
          className={`${styles.slide__button} ${styles.slide__button_right}`}
          onClick={siguiente}
        >
          <img src="/icon/icon-right-thin.svg" alt="" />
        </button>
      </div>
    </section>
  )
}


export default SliderShow