const KEY = '6988d0d0b69d81ebe313e54bf6120098'
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//1 request get data

const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)
    return data

}
getData('London')
.then((data)=>{
    console.log(data)

})
