// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={4ec997cf29b20b02cb246d57af3ff643}

// const { response } = require("express");


// //  4ec997cf29b20b02cb246d57af3ff643

// const http = require('http')

// const fs = require("fs")
// var requests = require("requests")
// const hFile = fs.readFileSync("home.html","utf-8")

// const server = http.createServer((req,res)=>
// { if (req.url = "/"){
//     requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4ec997cf29b20b02cb246d57af3ff643',)
//     .on('data',  (chunk) =>{
//        const jdata = JSON.parse(chunk)
//        const adata = [jdata]
//       console.log(adata[0].main.temp)


//       const realtimedata = adata.map((val)=>{
//         // const replaceval  = 
//       })
//     })
//     .on('end',  (err)=> {
//       if (err) return console.log('connection closed due to errors', err);
     
//       console.log('end');
//     });

// }

// });
// server.listen(8000,"127.0.0.1")



const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city = document.getElementById("city")
tempStatus = document.getElementById("tempStatus")
temp = document.getElementById("tempReal")
const dataHide = document.querySelector(".midLay")


getinfo =  async(event)=>{
 event.preventDefault();
 let cityVal = cityName.value
  if (cityVal === "") {
    city.innerText = "Please Write The City Name"
    dataHide.classList.add('dataHide');
  }else{
    try{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4ec997cf29b20b02cb246d57af3ff643`
    const response = [await(await fetch(url)).json()]
    // const data =[ await response.json()]
    console.log(response[0])
    // console.log(response[0].main.temp-273);
    
    temp.innerText = Math.ceil(response[0].main.temp-273) 
    // tempStatus.innerText = response[0].weather[0].main
      let tempMood =  response[0].weather[0].main
    city.innerText =`${response[0].name} , ${response[0].sys.country}`
      if (tempMood=="clear")
      { tempStatus.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";  } 
      
      else if (tempMood== "Clouds")
      {tempStatus.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";}
      
      else if (tempMood =="Rain")
      {tempStatus.innerHTML ="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";}
      else 
      {tempStatus.innerHTML = "<i class='fas fa-sun' style='color:#f1f2f6;'></i>";}
    dataHide.classList.remove('dataHide');


    }
    catch{
    city.innerText = "Please Write The City Name properly"
    dataHide.classList.add('dataHide');
    }
  }
}
submitBtn.addEventListener('click',getinfo)