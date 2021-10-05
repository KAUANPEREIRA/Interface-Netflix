// componentes para organizar a criação do código
import React from 'react'
import './MovieRow.css'

// componente que irar retornar baisco com o return ()
export default ({title, items}) => {
    return(
        <div className ='movieRow'>
            <h2>{title}</h2>
            <div className ='movie-list-area'>
                <div className='movie-lista'>
                    {items.results.length>0 && items.results.map((item,key)=>(
                        <div className='movie-list-item'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}