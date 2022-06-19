<template>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/search/">Search</a></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  background: lightgray;
}
li:first-child {
  border-right: 1px solid #fff;
}
a {
  display: grid;
  justify-content: center;
  padding: 2em 0;
  color: black;
}
</style>
