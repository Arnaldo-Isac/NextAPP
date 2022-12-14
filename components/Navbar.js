import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return <>
        
        <ul className={styles.navbar}>
            <il className={styles.item}>
                <Link href="/"><a>
                    Home
                </a></Link>
            </il>
            <il className={styles.item}>
                <Link href="product"><a>
                    Produto
                </a></Link>
            </il>
            <il className={styles.item}>
                <Link href="about"><a>
                    About
                </a></Link>
            </il>            
            <il className={styles.item}>
                <Link href="contacts"><a>
                    Contactos
                </a></Link>
            </il>
        </ul>
    </>
}