import React from 'react'
import { WaveAboutUp, WaveAboutDownd } from '../Wave/Wave'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.circle}>
      <WaveAboutUp/>
        <div className={`container__dark ${styles.about}`}>
          <div className='container'>
            <h2>Acerca de mí</h2>
              <p>Desde que inicie mi viaje de diseñadora y 
                desarrolladora de paginas web como independientemente hace más 
                de 2 años, he trabajado de forma remota para agencias y 
                empresas que decidieron extender su negocio virtualmente, 
                he colaborado con personas talentosas que me han enseñado la 
                importancia de poner atención a los detalles y realizar
                mi trabajo de forma profesional y oportuna.
              <br/>
              <br />
                Soy una persona muy curiosa, cuando desconozco un tema me gusta 
                investigar y buscar la solución hasta resolverlo, mi profesión 
                universitaria es Administradora de Empresas, un poco después de 
                finalizarla inicie a estudiar por mi cuenta diseño y desarrollo 
                web, adquiriendo la habilidad de diseñar paginas que se 
                adapten fácilmente a la lógica de programación o implementación 
                en plataformas tales como WordPress.
              </p>
          </div>
        </div>
      <WaveAboutDownd/>
    </section>
  )
}

export default About