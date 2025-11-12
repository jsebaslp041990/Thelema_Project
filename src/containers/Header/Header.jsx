import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import IconSocial from '../../components/Iconsocial/IconSocial'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Whatsapp from '../../assets/whatsapp.png'
import Estrella from '../../assets/estrella.png'

export const Header = () => {
    return (
        <nav className={styles.menu}>
             <div className={styles.icon}> 
                <Link to='/Inicio'>
                    <img src={Estrella} alt="Logo Estrella" className={styles.logo} />
                </Link>
            </div>
                <Link to='/Quienes_somos'>¿Quienes somos?</Link>
                <Link to='/Nuestros_servicios'>Nuestros servicios</Link>
                <Link to='/Publicaciones'>Publicaciones</Link>
                <Link to='/Talleres'>Talleres</Link>
                <Link to='/Contacto'>Contacto</Link>
            <div className={styles.header_IconSocial}> 
                <IconSocial icon="Whatsapp" image={Whatsapp} url='https://www.instagram.com/gnosisdethelema/' />
                <IconSocial icon="Instagram" image={Instagram} url='https://www.instagram.com/gnosisdethelema/' />
                <IconSocial icon="Facebook" image={Facebook} url='https://www.facebook.com/gnosis.de.thelema' />
            </div>
        </nav>
    )
}

export default Header; 