<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(1)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Omlouvám se, ale zapomněl jsem na úkol.
    </p> <br>
    <button type="button" @click="count++">Kolikrát {{ count }}</button>

    <div class="image">
      <img src="../assets/crying.jpg" />
    </div>
  </div>
</template>