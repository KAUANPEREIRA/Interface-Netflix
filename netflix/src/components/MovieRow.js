// componentes para organizar a criação do código
import React from 'react'
import './MovieRow.css'

// componente que irar retornar baisco com o return ()
export default ({title, items}) => {
    return(
        <div>
            <h2>{title}</h2>
            <div className ='movie-list-area'>
                {items.results.length>0 && items.results.map((item,key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>

                ))}
            </div>
        </div>
        
    )
}