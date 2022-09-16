import Link from 'next/link'
import MainContainer from '../components/MainContainer'

function Home(){
    return <>
        <MainContainer />
        <h1>Home</h1>
        <p>Verificado</p>
        <p>Aterroziznte </p>
        Visitar a página <Link href="/about"><a>Sobre nós</a></Link> na empresa ou ir a <a href="product">Produtos</a>
            
        
    </>
}

export default Home
