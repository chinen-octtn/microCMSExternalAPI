import fetch from 'node-fetch'

console.log('API test')
const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
const body = await response.json()

console.log(body)
