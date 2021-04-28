import Head from 'next/head';
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function MovieItem({info}){
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina Dinamica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <a>
        <Link href="/busca">Voltar para busca de Filmes</Link>
        </a>
        <h1 className={styles.title}>
             {info.title}
        </h1>
        
        <p>
            Nota:<strong> {info.vote_average} </strong>
        </p>
        <div ><p>
           Descrição: {info.overview}
        </p></div>
        <p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width='400'></img>
        </p>
      </main>
     </div>     
  )
}


export async function getServerSideProps(context){
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();
  return{
      props:{
        info: json.info
      }
    };
}

