import fetch from 'node-fetch'

const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
const responseData = await response.json()
const max = await responseData.results.length
let count = 0

const loop = setInterval(() => {
  if (count >= max - 1) {
    clearInterval(loop)
  }

  const pokeData = responseData.results[count]

  const fetchPost = (content, id) => {
    const endpoint = 'https://external-api.microcms.io/api/v1/poke'
    const postID = id ? `/${id}` : '/'
    const method = id ? 'PATCH' : 'POST'

    console.log(`${method}: ${content.name}`)

    fetch(`${endpoint}${postID}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': '9fa2e135ed5c4d6e90794ada6972c939675f',
      },
      body: JSON.stringify({
        name: content.name,
        url: content.url,
      }),
    })
  }

  fetch(
    `https://external-api.microcms.io/api/v1/poke/?filters=name[equals]${pokeData.name}`,
    {
      method: 'GET',
      headers: {
        'X-MICROCMS-API-KEY': '9fa2e135ed5c4d6e90794ada6972c939675f',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.totalCount) {
        fetchPost(pokeData, data.contents[0].id)
      } else {
        fetchPost(pokeData)
      }
    })

  count++
}, 1000)
