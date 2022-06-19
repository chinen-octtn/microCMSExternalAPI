<script setup>
const api = 'https://external-api.microcms.io/api/v1/poke'
const query = ref()
const isSearch = ref(false)

const endpoint = ref(`${api}?q=${query.value}&fields=name,url`)

const { data: allData } = useFetch(`${api}?fields=name,url`, {
  method: 'GET',
  headers: {
    'X-MICROCMS-API-KEY': '9fa2e135ed5c4d6e90794ada6972c939675f',
  },
})

const { data: searchResult, pending } = useLazyAsyncData('getAPI', () =>
  $fetch(`${endpoint.value}`, {
    method: 'GET',
    headers: {
      'X-MICROCMS-API-KEY': '9fa2e135ed5c4d6e90794ada6972c939675f',
    },
  })
)

const searchAPI = () => {
  isSearch.value = true
  endpoint.value = `${api}?q=${query.value}&fields=name,url`
  refreshNuxtData('getAPI')
}

onMounted(() => {
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
    <template v-if="isSearch">
      <p v-if="pending">Loading...</p>
      <textBox v-else :result="searchResult.contents" />
    </template>

    <dl class="text">
      <dt>CMSに入っているデータ</dt>
      <dd>{{ allData.contents }}</dd>
    </dl>
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

.text {
  border: 1px solid #ccc;
  padding: 1em;
  margin-top: 5rem;
}
</style>
