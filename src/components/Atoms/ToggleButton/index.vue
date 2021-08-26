<template>
  <div class="text-center">
    <button
      class="
        text-4xl
        mt-4
        rounded
        font-bold
        px-14
        py-3
        shadow-lg
        bg-purple-600
        hover:shadow-xl
        hover:bg-purple-700
      "
      @click="start"
      v-if="isActive === false"
    >
      START
    </button>
    <button
      class="
        text-4xl
        mt-4
        rounded
        font-bold
        px-14
        py-3
        shadow-lg
        bg-purple-600
        hover:shadow-xl
        hover:bg-purple-700
      "
      @click="stop"
      v-if="isActive === true"
    >
      STOP
    </button>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup () {
      const isActive = ref(false)
      // when the start button is clicked -- set the isActive to true
      const start = () => {
          isActive.value = true
      }
      // when the start button is clicked -- set the isActive to true
      const stop = () => {
          isActive.value = false
      }

      return {
          isActive,
          start,
          stop
      }
  }
};
</script>