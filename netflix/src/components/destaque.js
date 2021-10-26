import React from "react";
import './Destaque.css'

//mostrando o header do projeto através de componentes
export default({item})=>{
    let datas = new Date(item.first_air_date)
    let genres = []
    for(let i in genres){
        genres.push(item.genres[i].name)
    }
    console.log(item)
    return(

      
        <section className='featured'style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='transicao'>
                <div className='transicao-horizontal'>
                    <div className='nome-principal'>
                        {item.original_name}
                    </div>
                    <div className='informacoes-Titulo'>
                        <div className='pontos'>
                            {item.vote_average} Pontos
                        </div>
                        <div className='ano'>{datas.getFullYear()}</div>
                        <div className='temporada'>{item.number_of_seasons} Temporada{item.number_of_seasons!==1?'s':''}</div>
                    </div>
                    <div className='descricao'>{item.overview}</div>
                       
                    
                    <div className='buttons'>
                        <a href={`/watch/${item.id}`} className="assistir">Assistir</a>
                        <a href={`/list/add/${item.id}`} className="mLista">+ Minha lista</a>

                    </div>
                    <div className='generos'><strong>Generos:</strong>{genres.join(' , ')}</div>


                </div>


            </div>

        </section>
        
    )
}