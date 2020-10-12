const request = require('postman-request');

const geocode = (address,callback)=>{
     const geocodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmFodWx2YWx1cGFkYXN1IiwiYSI6ImNrZjFrb3JncjB0MTIzMXA0cWY5anBvbHMifQ.x1P9LdQEhH5OQIttG4M1tg`;
     request({url:geocodeurl,json:true},(error,response)=>{
             if(error){
                 callback('unable to access the location, Please check the connection',undefined);
             }
             else if(response.body.features.length===0){
                 callback('Unable to find the loacation, please check the location',undefined);
             }
             else{
                 callback(undefined,{
                     'lantitude':String(response.body.features[0].center[1]),
                     'logitutde':String(response.body.features[0].center[0]),
                     'place':response.body.features[0].place_name
                 })
             }
     })
};



module.exports={
    'geocode':geocode
}