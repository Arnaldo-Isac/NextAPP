import Link from 'next/link'

export default function Navbar(){
    return <>
        <ul>
            <il>
                <Link href="/"><a>
                    Home
                </a></Link>
            </il>
            <il>
                <Link href="product"><a>
                    Produto
                </a></Link>
            </il>
            <il>
                <Link href="about"><a>
                    About
                </a></Link>
            </il>            
            <il>
                <Link href="contacts"><a>
                    Contactos
                </a></Link>
            </il>
        </ul>
    </>
}