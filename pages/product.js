import Link from "next/link";

export default function Product(){
    return <>
        <h1> Produtos</h1>
        <p>Lista de produtos</p>
        <Link href="/"><a>inicio</a></Link> <Link href="about"><a>Sobre</a></Link>
    </>
}