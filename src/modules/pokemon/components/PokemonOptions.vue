<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{name, id} in options"
            @click="$emit('selectedOption', id)"
            :key="id"
            :disabled="blockSelection"
            :class="['capitalize',{
              'bg-red-300': blockSelection && id === correctAnswer,
              'bg-green-300': blockSelection && id !== correctAnswer
            }]">
      {{ name }}
    </button>

  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();

</script>

<style scoped>

button {
  @apply bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer text-center w-40 transition-all hover:bg-gray-300
}

</style>