import styles from './skills.module.scss'

const Skills = () => {
  return (
    <section className={`container ${styles.skill}`}>
        <h2>Skills</h2>
        <ul className={styles.skill__box}>
          <li>
            <h5>Html + Scss + Css</h5>
            <div className={styles.skill__color}>
              <span className={`${styles.skill__bar} ${styles.skill__bar1}`}></span>
            </div>
          </li>
          <li>
            <h5>React + Javascript</h5>
            <div className={styles.skill__color}>
              <span className={`${styles.skill__bar} ${styles.skill__bar2}`}></span>
            </div>
          </li>
          <li>
            <h5>WordPress</h5>
            <div className={styles.skill__color}>
              <span className={`${styles.skill__bar} ${styles.skill__bar3}`}></span>
            </div>
          </li>
          <li>
            <h5>Design Prototyping + Figma</h5>
            <div className={styles.skill__color}>
              <span className={`${styles.skill__bar} ${styles.skill__bar4}`}></span>
            </div>
          </li>
          <li>
            <h5>Photoshop + Ilustrator</h5>
            <div className={styles.skill__color}>
              <span className={`${styles.skill__bar} ${styles.skill__bar5}`}></span>
            </div>
          </li>
        </ul>
    </section>
  )
}

export default Skills