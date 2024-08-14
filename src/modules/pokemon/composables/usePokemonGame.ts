import { computed, onMounted, ref } from 'vue';
import { GameStatus, type PokemonListResponse } from '@/modules/pokemon/interfaces';
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';
import type { Pokemon } from '@/modules/pokemon/interfaces/pokemon.interface';
import confetti from 'canvas-confetti';


export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.PLAYING);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
  });
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=251');

    const pokemonsArray: Pokemon[] = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.PLAYING;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };


  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    if (hasWon) {
      gameStatus.value = GameStatus.WON;
      confetti({
        particleCount: 500,
        spread: 170,
        origin: { y: 0.6 },
      });
      return;
    }

    gameStatus.value = GameStatus.LOST;

  };

  const nextQuestion = async () => {

    console.log('nextQuestion');

    pokemons.value = await getPokemons();

    getOptions();
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000));

    pokemons.value = await getPokemons();

    getOptions();

  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,
    checkAnswer,
    nextQuestion,
  };
};