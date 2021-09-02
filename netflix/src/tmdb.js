// iniciando pegando dados da requisição para tratá-los
// necessário ler a documentação da api que ira consumir 
//jogar dados da requisição em um json e começar a tratá-los
// criar uma função auxiliar e dar um fetch nela 
//api key e a chave da api , api_base é base que vai ser utilizada na buscas da requisições
// basic fetch dunção auxiliar importante no processo

const API_KEY = 'b584bb3011f4db26e27a8473db21d3d7'
const API_BASE ='https://api.themoviedb.org/3'

const basicFetch =  async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json =  await req.json()
    return json 
}

export default {
    getHomeList: async ()=>{
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em alta',
                items: await basicFetch(`/movie/top_rated?language=ptBR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'documentarios',
                items:await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }

        ]
    }


}