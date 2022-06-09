import styles from './footer.module.scss'
import { WaveFooter }  from '../Wave/Wave'
import Form from '../Form/Form'
import ModalButton from './Calendly/ModalButton'
import DateForm from './Date/Date'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <WaveFooter/>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__text}>
              <div className={styles.footer__text_container}>
                <div className={styles.footer__text_location}>
                  <h3 className={styles.footer__title}> Agenda una reunión en Workana.</h3>
                  <div className={styles.footer__text_icon}>
                    <img src='/icon/location.svg' alt='Icon Locacion'/>
                      <p className={styles.footer__text_p}>
                        TimeZone: (GMT-5) Colombia
                        {/* <DateForm/> */}
                      </p>
                  </div>
                </div>
                {/* <div className={styles.calendly}><ModalButton/></div> */}
                {/* <div className={styles.footer__text_contact}>
                  <h3 className={styles.footer__title}> Ó contactame. </h3>
                  <div className={styles.footer__text_icon}>
                    <img src='/icon/Whatsapp.svg' alt='Icon Whatsapp'/>
                    <p className={styles.footer__text_p}>
                      3505211501
                    </p>
                  </div>
                  <div className={styles.footer__text_icon}>
                    <img 
                        src='/icon/email.svg' 
                        alt='Icon Email'
                      />
                    <p className={styles.footer__text_p}>
                      Albayaja@gmail.com
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <a 
              href="https://www.workana.com/freelancer/2068938d378d1b1f142a4409b62de4ff">
                <button className={styles.footer__button}>
                  Workana
                </button>
            </a>
            {/* <Form/> */}
          </div>
        </div>
        <div className={styles.copy__right}>
          <p> Alba Lucia Gomzalez </p>
          <p>©2021</p>
        </div>
      </footer>
    </>
  )
}

export default Footer