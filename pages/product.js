import Link from "next/link";

export default function Product(){
    return <>
        <h1> Produtos</h1>
        <p>Lista de produtos</p>
        <Link href="/"><a>inicio</a></Link>
         ou ir para <Link href="about"><a>Sobre nós</a></Link>
    </>
}