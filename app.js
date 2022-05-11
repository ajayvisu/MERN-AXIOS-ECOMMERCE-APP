const express       = require('express');
const axios         = require('axios');

const app = express();
app.use (express.json());

app.listen(4000,() => {
    console.log("Server Started On 4000");
});

const getData1 = () =>{
    axios.get('http://localhost:8000/api/products/getall')
         .then (res => {console.log(res);});
    console.log ("getDate:", getData1);
};

const getData2 = () =>{
    axios.get('http://localhost:8000/api/products/prod-by-char?name=towel')
         .then (res => {console.log(res);});
    console.log ("getDate:", getData2);
};