import Link from "next/link"
import MainContainer from '../components/MainContainer'

export default function Contacts(){
    return <>
            <MainContainer />
            <h1>Nossos cotactos</h1>
            <p>Contactos da empresa ou instituição: </p>
                voltar a página <Link href="/"> 
                    <a>Principal</a>
                </Link>
        
            </>
}