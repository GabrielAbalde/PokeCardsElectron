import { ref } from 'vue';
import axios from 'axios';


export function buscarPokemon(nombre) {
    const pokemon = ref(null);
    const loading = ref(false);
    const error = ref(null);
  
    const traerInfo = async () => {
      loading.value = true;
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${nombre}`);
  
        const flavorTextEntry = speciesResponse.data.flavor_text_entries.find(
          (entry) => entry.language.name === 'es'
        );
  
        pokemon.value = {
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
          types: response.data.types.map(type => type.type.name),
          abilities: response.data.abilities.map(ability => ability.ability.name),
          stats: response.data.stats.map(stat => ({
            name: stat.stat.name,
            base: stat.base_stat,
          })),
          height: response.data.height,
          weight: response.data.weight,
          moves: response.data.moves.map(move => move.move.name).slice(0, 20),
          description: flavorTextEntry ? flavorTextEntry.flavor_text : 'Descripción no disponible',
        };
      } catch (err) {
        console.log(err)
        error.value = "Error fetching pokemon details";
      } finally {
        loading.value = false;
      }
    };
  
    return {
      pokemon,
      loading,
      error,
      traerInfo
    };
  }