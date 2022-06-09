import CalendlyLink from '../CalendlyLink'
import styles from './modalPopUp.module.scss'

const ModalPopUp = ({state, setState}) => {
  return (
   <div>
     {state && 
     <div className={styles.modal}>
        <div className={styles.modal__contenedor}>
        <button 
          className={styles.modal__close}
          onClick={() => setState(false)}
        >
        <img src="close.png" alt="" />
        </button>
          <CalendlyLink/>
        </div>
     </div>
    }
   </div>
  )
}

export default ModalPopUp