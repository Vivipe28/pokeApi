import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/pokemonService";

const PokemonDetailPage = () => {

    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const data = await fetchPokemonDetail(name)
                setPokemon(data)
            } catch {
                console.log('Error en getPokemonDetail', error);
            }
        }
        getPokemonDetail()
    }, [name])

    return (
        <>
            {pokemon ? (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </>
    )
}

export default PokemonDetailPage