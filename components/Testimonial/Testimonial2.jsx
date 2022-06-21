import React, { useEffect, useState } from 'react'
import styles from './testimonial.module.scss'
import data from './data'

const Testimonial2 = (data) => {

  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section>
        <div className="title">
          <h2>Top Header</h2>
        </div>
        <div>
          {people.map((item, indexPeople) => {
            const {id, image, quote, name} = item;
            let position = 'nextSlide';
            if(indexPeople === index) {
              position = 'activeSlide'
            }
            if(indexPeople === index -1 || (index === 0 && indexPeople === people.length - 1)){
              position = 'lastSlide'
            }
            return(
              <article className='' key={id}>
                <img src={image} alt={name} className=''/>
                <p>{quote}</p>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default Testimonial2