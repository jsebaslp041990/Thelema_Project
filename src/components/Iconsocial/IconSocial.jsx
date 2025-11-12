import styles from './IconSocial.module.css'

export default function IconSocial({ icon, image, url }) {
    return <a href={url}>
        <img className={styles.IconSocial_img} src={image} alt={icon} />
    </a>
}
