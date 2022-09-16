import Link from "next/link"
import MainContainer from '../components/MainContainer'

export default function Contacto(){
    return <>
            <MainContainer />
            <h1>Nossos cotactos</h1>
            <p>Acerca da empresa ou instituição</p>
                voltar a página <Link href="/"> 
                    <a>Principal</a>
                </Link>
        
            </>
}