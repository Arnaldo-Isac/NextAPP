import Link from "next/link";
import MainContainer from "../components/MainContainer";

export default function Product(){
    return <>
        <h1> Produtos</h1>
        <MainContainer />
        <p>Lista de produtos</p>
        <Link href="/">
             <a>Inicio</a>  
        </Link> ou ir para <Link href="about">
            <a>Sobre nós</a>
        </Link>
    </>
}