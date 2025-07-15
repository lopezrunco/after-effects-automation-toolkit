const fs = require('fs')
const { API_KEY } = require('./openweather-api-key.js')
const storePath = './data/weather.json'

async function fetchDataAndStore(cityName) {
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    let jsondata
    console.log('Fetching data from Open weather API...')
    // Fetch data
    const response = await fetch(API)
    jsondata = await response.json()
    // Store data in JSON file
    fs.writeFile(storePath, JSON.stringify(jsondata), (err) => {
        if (err) throw err
        console.log(`Done! Data stored in ${storePath}`)
    })
}
fetchDataAndStore('Montevideo')