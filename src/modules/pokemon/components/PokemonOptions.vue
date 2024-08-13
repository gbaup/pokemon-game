<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{name, id} in options"
            @click="$emit('selectedOption', id)"
            :key="id"
            :disabled="blockSelection"
            :class="
            {
              correct: blockSelection && id === correctAnswer,
              incorrect: blockSelection && id !== correctAnswer
            }
            ">
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
  @apply capitalize bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer text-center w-40 transition-all hover:bg-gray-300
}

.correct {
  @apply bg-green-300
}

.incorrect {
  @apply bg-red-300
}

</style>