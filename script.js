const API_KEY ='4aea5aea253fc563265bdd3d7cab46c1'

const API_BASE ='https://api.themoviedb.org/3'



const endpoint = `/tv/62560-mr-robo}?api_key=${API_KEY}`


const basicFetch = async(endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json
    console.log(json)
    return json
}
basicFetch(endpoint)