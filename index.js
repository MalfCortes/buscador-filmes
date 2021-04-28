import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import caminho from '../../../lib/tmdb'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Consulta de Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaques
        </h1>
        <a>
        <Link href="/busca">Busca de Filmes</Link>
        </a>
        
        <p>
          Atravez da API do TMDB estamos buscando a lista de Filmes em destaque.
        </p>
        <ul>
        {list.map(item=>(
            <li>
              <a href={`/movie/${item.id}`}>
              {item.title}<br/>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width='150' />
              </a>
            </li>
          ))};
          </ul>
          <p>by Rodrigo</p>
      </main>
     </div>     
  )
}

export async function getServerSideProps(){
  const res = await fetch(`${caminho}/api/trending`);
  const json = await res.json();
  return{
      props:{
        list: json.list
      }
    };
}
