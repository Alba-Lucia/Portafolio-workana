import styles from './template.module.scss'
// import { WavePlantillaUp, WavePlantillatDownd } from '../Wave/Wave'
import PostTemplate from './PostTemplate/PostTemplate'
import { WavePlantillatDownd, WavePlantillaUp } from '../../Wave/Wave'

const Template = () => {
  return (
    <section className={styles.circle}>
      <WavePlantillaUp/> 
         <div className={`container__dark ${styles.template}`}>
            <div className='container'>
               <h2 className={styles.template__title}>Plantillas con HTML CSS y JavaScript</h2>
               <PostTemplate/>
            </div>
        </div>
      <WavePlantillatDownd/>
    </section>
  )
}

export default Template