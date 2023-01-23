<template>
  <div :class="$style.wrapper">
    <simple-form />
  </div>
</template>

<script>
import SimpleForm from './components/SimpleForm.vue'

export default {
  components: {
    SimpleForm
  }
}
</script>

<style module>
.wrapper {
  display: grid;
  place-items: center;
  padding: 30px;
}
</style>