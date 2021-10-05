import React, {useEffect, useState} from 'react'
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'
//ARQUIVO TMDB CRIADO APENAS PARA UTILIZAR A API


export default ()=>{
const [movieList, SetMovielist] = useState([])//se inicia aqui com um array vazio
  useEffect(()=>{
    const loadAll = async ()=>{
      //PEGANDO A LISTA TOTAL ...
      let list = await tmdb.getHomeList()
      SetMovielist(list)
    

      
    }
    loadAll()
  },


  [])
  return(
  <div className="page">
    <section className="list">
      {movieList.map((item, key)=>(// loop para mostrar a exibição das listas item, key chave prescisa nas listas
        <MovieRow key={key} title={item.title} items={item.items}/> //item o signfica  item do loop importante entender o conceito de props

  ))}
    </section>

 
  </div>
  ) 
}