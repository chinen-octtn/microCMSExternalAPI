<template>
  <button type="button">{{ props.text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String,
})
</script>

<style lang="scss" scoped>
button {
  background: purple;
  padding: 1rem 4rem;
  border-radius: 10px;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
}
</style>
