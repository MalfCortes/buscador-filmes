import Head from 'next/head';
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css';

export default function PostItens(){
    const router = useRouter();
    const {id} = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina Dinamica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Rotas Dinamicas  
        </h1>
        <p>
            Ao clicar no filme o mesmo tem um numero de post que e colocado apos a url
        </p>
        <p>
            Post acessado: {id}
        </p>
      </main>
     </div>     
  )
}

export async function getServerSideProps(){
  const res = await fetch('https://buscador-filmes-malfcortes.vercel.app//api/trending');
  const json = await res.json();
  return{
      props:{
        list: json.list
      }
    };
}
