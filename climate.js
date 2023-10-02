let api_key='bbc39dfeb5c9124d6a2492211f6ff508';
let city= 'quito'
let difkelvin=273.15
let urlbase='https://api.openweathermap.org/data/2.5/weather'
let urlbase2=



document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const city=document.getElementById('ciudadEntrada').value
    if(city){                   //si toco el boton y no hay nada en ciudad no se ejecuta nada
        fetchdatosclima(city)
    }
})

function fetchdatosclima(city){
    fetch(`${urlbase}?q=${city}&appid=${api_key}`)
    .then(response=> response.json())
    .then( response=> mostrardatosclima(response))      //funcion que escribe datos en pantalla

}

function mostrardatosclima(response){ 
    console.log(response)     
    const divdatosclima=document.getElementById('datosClima')
    divdatosclima.innerHTML=''

    const cityname=response.name
    const temperatura=response.main.temp 
    const descripción= response.weather[0].description 
    const paisnombre= response.sys.country

    const citytitle= document.createElement('h2')
    citytitle.textContent=`${cityname},${paisnombre}`

    const tempinfo=document.createElement('p')
    tempinfo.textContent=`La temperatura es:${Math.floor(temperatura-difkelvin)}"°C"`

    const descriptinfo=document.createElement('p')
    descriptinfo.textContent=`La descripcion meteorologica es: "${descripción}"`

    divdatosclima.appendChild(citytitle)
    divdatosclima.appendChild(tempinfo)
    divdatosclima.appendChild(descriptinfo)
    

}