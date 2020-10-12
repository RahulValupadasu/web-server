//this is client side javascript 

console.log('Client side javascript loaded');

// const weather_input_button = ()=>{

// }

// const weather_input_button = ()=>{
//     //fetch is browser functionality and can be used directly , It can be used only on client side javascript
//     fetch(`http://localhost:3000/weather?address=${document.getElementById('wi01').value}`).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(error);
//         }
//         else{
//             document.getElementById('location').innerHTML = data.location;
//             document.getElementById('temperature').innerHTML = data.temp;
//             console.log(data.location);
//             console.log(data.temp);
//         }
//     })
// })
// }


const form_weather = document.getElementById('weather_form');

form_weather.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("submit event listner working properly");
    fetch(`/weather?address=${document.getElementById('wi01').value}`).then((response)=>
    {
    response.json().then((data)=>{
        if(data.error){
            console.log(error);
        }
        else{
            document.getElementById('location').innerHTML = data.location;
            document.getElementById('temperature').innerHTML = data.temp;
            console.log(data.location);
            console.log(data.temp);
        }
    })
})
})



