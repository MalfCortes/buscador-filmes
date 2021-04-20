import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Busca() {
    const [searchText, setSearchText] = useState('');
    const [movieList, SetMovieList] = useState([]);

    const handleSearch = async () => {
        if(searchText !== ''){
            const result = await fetch(`https://buscador-filmes-malfcortes.vercel.app//api/search?q=${searchText}`)
            const json = await result.json();
            SetMovieList(json.list);
            console.log("aqui", json);
        }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Consulta de Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca de Filme
        </h1>
        <input type='text'value={searchText} onChange={e=>setSearchText(e.target.value)}/>
        termos de busca: {searchText}
        <button onClick={handleSearch}>Buscar</button>
        
        <hr/>
        
        <ul>
        {movieList.map(item=>(
            <li>
              <a href={`/post/${item.id}`}>
              {item.title}<br/>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width='150' />
              </a>
            </li>
          ))}
          </ul>

      </main>
     </div>     
  )
}
