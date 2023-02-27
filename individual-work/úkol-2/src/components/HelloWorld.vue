<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Omlouvám se, ale zapomněl jsem na úkol.
    </p> <br>
    <button type="button" @click="count++">Kolikrát {{ count + 1 }}</button>
  </div>

  <div class="image">
    <img src="../assets/crying.jpg"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
