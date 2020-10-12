const request = require('postman-request');

const weather = (cordinates,callback)=>{
    const weatherurl = `http://api.weatherstack.com/current?access_key=d7476619e485c6c0325aaae47c0f869a&query=${cordinates.langitude},${cordinates.longitude}`;
    request({url:weatherurl,json:true},(error,response,body)=>{
        if(error){
            callback('Unable to laod the cordinates,please check the conectivity',undefined);
        }else if(response.body.error){
            callback('Please check the parameters cordinates');
        }else{
            callback(undefined,response.body);
        }
    })
};



module.exports={
    'weather':weather
};