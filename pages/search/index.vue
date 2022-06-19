<script setup>
const api = 'https://external-api.microcms.io/api/v1/poke'
const query = ref()

const endpoint = ref(`${api}?q=${query.value}&fields=name,url`)

const { data: searchResult, pending } = useLazyAsyncData('getAPI', () =>
  $fetch(`${endpoint.value}`, {
    method: 'GET',
    headers: {
      'X-MICROCMS-API-KEY': '9fa2e135ed5c4d6e90794ada6972c939675f',
    },
  })
)

const searchAPI = () => {
  console.log('検索')
  endpoint.value = `${api}?q=${query.value}&fields=name,url`
  refreshNuxtData('getAPI')
}

onMounted(() => {
  console.log(document.searchForm)
  const form = document.searchForm
  form.addEventListener('submit', searchAPI)
})
</script>

<template>
  <div>
    <h1>microCMS 検索</h1>
    <form name="searchForm" class="searchArea" @submit.prevent>
      <Input :value="query" v-model="query" />
      <ApiButton text="検索" @click="searchAPI" />
    </form>
    <p v-if="pending">Loading...</p>
    <textBox v-else :result="searchResult.contents" />
  </div>
</template>

<style lang="scss">
.searchArea {
  display: flex;
  gap: 1em;
}
input {
  width: 40%;
}
</style>
