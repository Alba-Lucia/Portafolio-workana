import styles from './header.module.scss'
import Link from 'next/dist/client/link'

const Header = () => {
  return (
    <header className=" header container__dark">
        <div className='container'>
            <nav className={styles.header__navbar}>
              {/* <Link href="/">Inicio</Link> */}
              {/* <Link href="/cv">CV</Link> */}
              {/* <Link href="/contact">Contacto</Link> */}
              {/* <Link href="/portfolio">Portafolio</Link> */}
            </nav>
        </div>
    </header>
  )
}

export default Header