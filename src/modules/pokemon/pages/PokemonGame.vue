<template>
  <section v-if="isLoading || randomPokemon.id === null"
           class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center h-screen w-screen">
    <h1 class="mb-4">¿Quién es este pokemon?</h1>
    <!--    <h3 class="capitalize">-->
    <!--      {{ gameStatus }}-->
    <!--    </h3>-->

    <PokemonPicture :pokemon-id="randomPokemon.id"
                    :show-pokemon="gameStatus !== GameStatus.PLAYING" />

    <PokemonOptions :options="options"
                    :block-selection="gameStatus !== GameStatus.PLAYING"
                    @selected-option="checkAnswer"
                    :correct-answer="randomPokemon.id"
                    @next-question="nextQuestion"

    />

  </section>
</template>

<script setup lang="ts">

import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';

const { gameStatus, isLoading, randomPokemon, pokemonsOptions: options, checkAnswer, nextQuestion } = usePokemonGame();


</script>

<style scoped>

</style>