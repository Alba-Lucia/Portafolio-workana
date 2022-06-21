import Hero from '../../Hero/Hero'
import styles from './HeroPortfolio.module.scss'

const HeroPortfolio = () => {
  return (
    <div >
        <Hero 
            titulo="Portafolio"
            image="/ilustrations/ilustracionPortfolio6.svg"
            description="Paginas webs Responsives"
        />
    </div>
  )
}

export default HeroPortfolio