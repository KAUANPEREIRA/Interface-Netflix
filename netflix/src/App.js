import React, {useEffect, useState} from 'react'
import './App.css'
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'
import Destaque from './components/Destaque'
//ARQUIVO TMDB CRIADO APENAS PARA UTILIZAR A API


export default ()=>{
const [destaqueData, Setdestaquedata] = useState(null)
const [movieList, SetMovielist] = useState([])//se inicia aqui com um array vazio
  useEffect(()=>{
    const loadAll = async ()=>{
      //PEGANDO A LISTA TOTAL ...
      let list = await tmdb.getHomeList()
      SetMovielist(list)

      // pegando os originais através de um filtro
      let originals = list.filter(i=>i.slug==='originals')
      let randomChose = Math.floor(Math.random()* (originals[0].items.results.length - 1))
      let chose= originals[0].items.results[randomChose]
      
      let choseInfo = await tmdb.getMovieInfo(chose.id, 'tv')
      console.log(choseInfo)
    

      
    }
    loadAll()
  },


  [])
  return(
  <div className="page">
    
    {destaqueData &&
    <Destaque item ={destaqueData}/>
    }

    <section className="list">
      {movieList.map((item, key)=>(// loop para mostrar a exibição das listas item, key chave prescisa nas listas
        <MovieRow key={key} title={item.title} items={item.items}/> //item o signfica  item do loop importante entender o conceito de props

  ))}
    </section>

 
  </div>
  ) 
}