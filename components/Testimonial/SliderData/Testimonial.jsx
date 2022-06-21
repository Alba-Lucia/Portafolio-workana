import React, { useState } from 'react'
import styles from './testimonial.module.scss'
import Image from "next/image"


const Testimonial = () => {

  const [index, setIndex] = useState(0)
  
  const images = [ 
    '/img/CafeMercado.png',
    '/img/Nathan.png',
    '/img/Logo-historia.png',
  ];

  const handleArrow = (direction) => {
    if(direction==='l'){
      setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction==='r'){
      setIndex(index !== 2 ? index+1 : 0)
    }

    const transicion = () =>{
      // Reiniciamos la posicion del slide
      index.current.style.transition = `none`;
      index.current.style.transform = `translateX(0vw)`;
  
      // Tomamos el primer elemento y lo mandamos al final
      index.current.appendChild(primerElement);
  
      // evita que el slider se devuelva al primero al dar reverse
      index.current.removeEventListener('transitionend', transicion);
    }
  }


  console.log(index)

  return (
    <div className={styles.container}>
      <div 
        className={styles.arrowContainer} 
        style={{left:50}} 
        onClick={() => handleArrow('l')}
      >
        <p className={styles.arrow__rigth}>{'<'}</p>
      </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
          {images.map((img, i) => (
             <div className={styles.imageContainer} key={i}>
              <img src={img} alt='' layout='fill' objectFit='contain'/>
           </div>
          ))}
        </div>
      <div 
        className={styles.arrowContainer} 
        style={{right:0}}
        onClick={() => handleArrow('r')}
      >
        <p className={styles.arrow__left}>{'>'}</p>
      </div>
    </div>
  )
}

export default Testimonial