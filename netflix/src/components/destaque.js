import React from "react";
import './Destaque.css'

//mostrando o header do projeto através de componentes
export default({item})=>{
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
                        <div className='ano'>2099</div>
                        <div className='temporada'>{item.number_of_seasons}Temporada{item.number_of_seasons!==1?'s':''}</div>
                    </div>
                    <div className='descricao'>
                        {item.overview}
                    </div>


                </div>


            </div>

        </section>
    )
}