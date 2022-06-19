<template>
  <ul class="text" v-if="props.result.length !== 0">
    <p>検索結果</p>
    <template v-for="item in props.result">
      <li>
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </template>
  </ul>
  <p v-else>該当する検索結果はありません。別のワードで検索してください。</p>
</template>

<script setup>
const props = defineProps({
  result: Array,
})
</script>

<style lang="scss" scoped>
.text {
  margin: 2em 0 0;
  font-size: 0.8rem;
  padding: 0;
  list-style: none;
}

p + p {
  border-top: 1px solid #ccc;
  padding-top: 1em;
  margin-top: 1em;
}

a {
  display: block;
  padding: 1em;

  @media (any-hover: hover) {
    &:hover {
      background: #efefef;
    }
  }
}
</style>
