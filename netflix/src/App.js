import React, {useEffect} from 'react'
import tmdb from './tmdb'
//ARQUIVO TMDB CRIADO APENAS PARA UTILIZAR A API


export default ()=>{

  useEffect(()=>{
    const loadAll = async ()=>{
      //PEGANDO A LISTA TOTAL
      let list = await tmdb.getHomeList()
      console.log(list)

    }
    loadAll()
  },


  [])
  return(
  <div>
 <h1>Eu vu vencer e vou ser um otimo programddor front end</h1>
    <script>
    
  

    </script>
   
  </div>
  )
}