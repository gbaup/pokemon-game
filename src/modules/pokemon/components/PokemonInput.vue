<template>
  <section class="flex flex-col justify-center items-center">
    <input class="m-5">
    <button class="btn-secondary"
            @click="$emit('nextQuestion')"
    >
      Confirmar
    </button>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-secondary {
  @apply bg-blue-300 text-white p-2 rounded-2xl w-32 m-6 hover:bg-blue-400
}
</style>