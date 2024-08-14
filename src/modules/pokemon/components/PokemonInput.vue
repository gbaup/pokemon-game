<template>
  <section class="flex flex-col justify-center items-center mt-5">

    <input
      v-model="message"
      placeholder="Pokemon"
      @keypress.enter="$emit('checkInput', message)"
    />

    <button @click="$emit('checkInput', message)"
            :class="[
            {
              correct: gameStatus === GameStatus.WON,
              incorrect: gameStatus === GameStatus.LOST,
            },
            'btn-secondary'
            ]"
    >
      Confirmar
    </button>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { GameStatus } from '@/modules/pokemon/interfaces';


interface Props {
  correctAnswer: string;
  gameStatus: GameStatus;
}

defineProps<Props>();

const message = ref('');

defineEmits<{
  checkInput: [message: string];
}>();

</script>

<style scoped>
.btn-secondary {
  @apply bg-blue-300 text-white p-2 rounded-2xl w-32 m-4 hover:bg-blue-400
}

input {
  @apply m-4 p-1 rounded-md border border-gray-300
}

.correct {
  @apply bg-green-300
}

.incorrect {
  @apply bg-red-300
}

</style>