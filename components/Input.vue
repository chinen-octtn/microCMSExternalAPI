<template>
  <input
    type="search"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  background: purple;
  padding: 1rem 4rem;
  border-radius: 10px;
  color: #fff;
}
</style>
