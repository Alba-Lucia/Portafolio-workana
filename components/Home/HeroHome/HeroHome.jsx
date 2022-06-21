import styles from './heroHome.module.scss'
import Hero from '../../Hero/Hero'

const HeroHome = () => {
  return (
    <div className={styles.border}>
        <Hero 
            saludo="Hola, soy"
            titulo="Alba Lucía González"
            button={<button><a href="/archives/Alba-Resume.pdf">
              Curriculo
            </a></button>}
            image="AlbaPortafolio.png"
        />
    </div>
  )
}

export default HeroHome