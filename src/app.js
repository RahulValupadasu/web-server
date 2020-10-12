const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { response } = require('express');
const app = express();
const weather_module = require('./utils/weather');
const geocoding = require('./utils/geocode');
const port = process.env.PORT || 3000;


//path names 
publicDirectoryPath = path.join(__dirname,'../public');
// console.log(__dirname)
customviewsDirectoryPath = path.join(__dirname,'../custom-views');
partialsDirectoryPath = path.join(__dirname,'../custom-views/partials');


//setting up configuration for express app
app.set('view engine', 'hbs');
app.set('views',customviewsDirectoryPath);
hbs.registerPartials(partialsDirectoryPath);
app.use(express.static(publicDirectoryPath)); 
// console.log(app.stack);

//route handlers
app.get('',(req,res)=>{
    return res.render('index')
    });

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send("You must send address query parameter in order to fetch the temperature");
    }
    geocoding.geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send(error);
        }
        else
        {
            weather_module.weather({'langitude':data.lantitude,
            'longitude':data.logitutde,},(error,forecast_data)=>
            {
                if(error)
                {
                    return res.send('Error',error);
                }else
                   console.log("Current Temperature in  "+data.place+" is "+forecast_data.current.temperature+" Celsius, Chances of rain is "+forecast_data.current.precip);
                   return res.send({
                    'location':data.place,
                    'temp':forecast_data.current.temperature
                });
                 
            })
        }
    })
    
});



    





app.listen(port,()=>{
    console.log(`Port ${port} has started`);
});