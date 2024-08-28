import { ref, onMounted } from 'vue';
import axios from 'axios';

export function buscarPokemones(limit = 25) {
    
  const pokemones = ref([]);
  const pokemon = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchPokemones = async () => {
    loading.value = true;
    try {
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const promesas = respuesta.data.results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return {
          name: pokemonData.data.name,
          image: pokemonData.data.sprites.other['official-artwork'].front_default,
          type: pokemonData.data.types[0].type.name,
        };
      });
      pokemones.value = await Promise.all(promesas);
    } catch (err) {
      error.value = "Error fetching pokemons";
    } finally {
      loading.value = false;
    }
  };


  const fetchPokemonDetails = async (pokemonId) => {
    loading.value = true;
    try {
      //detalles del pokemon
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

      //descripcion del pokemon
      const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
            
      // Filtrar la descripción en español o el idioma que prefieras
      const flavorTextEntry = speciesResponse.data.flavor_text_entries.find(
          (entry) => entry.language.name === 'es'
      );

      pokemon.value = {
        name: response.data.name,
        image: response.data.sprites.other['official-artwork'].front_default,
        types: response.data.types.map(type => type.type.name),
        abilities: response.data.abilities.map(ability => ability.ability.name).slice(0, 5),
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
      error.value = "Error fetching pokemon details";
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchPokemones);

  onMounted(fetchPokemones);

  return {
    pokemones,
    pokemon,
    loading,
    error,
    fetchPokemones,
    fetchPokemonDetails,
  };
}
