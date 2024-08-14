<template>
  <DifficultToggle />
  <PokemonGame v-show="value" />
  <PokemonHardGame v-show="!value" />
</template>

<script setup lang="ts">

import PokemonGame from '@/modules/pokemon/pages/PokemonGame.vue';
import PokemonHardGame from '@/modules/pokemon/pages/PokemonHardGame.vue';
import DifficultToggle from '@/modules/game/components/DifficultToggle.vue';
import { toggleState } from '@/modules/game/composables/useToggle';


const { value } = toggleState;


</script>


<style scoped>

</style>