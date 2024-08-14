<template>
  <section class="mt-5 flex flex-col items-center">
    <button v-for="{name, id} in options"
            @click="$emit('selectedOption', id)"
            :key="id"
            :disabled="blockSelection"
            :class="[
            {
              correct: blockSelection && id === correctAnswer,
              incorrect: blockSelection && id !== correctAnswer
            },
            'btn-option'
            ]">
      {{ name }}
    </button>
    <button class="btn-secondary"
            @click="$emit('nextQuestion')"
    >
      Siguiente
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
  nextQuestion: [];
}>();

</script>

<style scoped>

.btn-option {
  @apply capitalize bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer text-center w-40 transition-all hover:bg-gray-300
}

.btn-secondary {
  @apply bg-blue-300 text-white p-2 rounded-2xl w-32 m-6 hover:bg-blue-400
}

.correct {
  @apply bg-green-300
}

.incorrect {
  @apply bg-red-300
}

</style>