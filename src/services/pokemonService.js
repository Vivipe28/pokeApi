export const fetchPokemons = async () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('error al obtener la data')
        }
        const data = await response.json()
        return data.results
    }
    catch (error){
        console.log('Error desde la api', error);
    }
}

export const fetchPokemonDetail = async (name) => {

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        return data
    }
    catch (error){
        console.log('Error desde la api del detalle del pokemon', error);
    }

}