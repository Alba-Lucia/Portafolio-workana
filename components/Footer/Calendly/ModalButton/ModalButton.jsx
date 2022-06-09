import { useState } from 'react';
import ModalPopUp from '../ModalPopUp/ModalPopUp';
import styles from './modalButton.module.scss'
import Image from 'next/image';

const ModalButton = () => {
    const [stateModal, setStateModal] = useState(false);

  return (
    <div className={styles.modalButton}>
      <a
        className={styles.modalButton__link}
        onClick={() => setStateModal(!stateModal)}
      >
        <div className={styles.modalButton__image_calendar}>
          <p className={styles.modalButton__text}>Please chose a date here</p>
        </div>
          <Image 
            width={25}
            height={25}
            className={styles.modalButton__calendar}
            src='/icon/calendar.png' 
            alt='Icon calendar' 
          />
        {/* <img 
          className={styles.modalButton__arrow}
          src='right-arrow.png' 
          alt='Icon right arrow' 
        /> */}
      </a>
        <ModalPopUp
          state={stateModal}
          setState={setStateModal}
        />
    </div>
  )
}

export default ModalButton