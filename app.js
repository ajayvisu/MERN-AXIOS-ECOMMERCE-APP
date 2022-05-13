const express       = require('express');
const mongoose      = require("mongoose");
const axios         = require('axios');

const app = express();
app.use (express.json());

app.listen(4000,() => {
    console.log("Server Started On 4000");
});

mongoose.connect('mongodb://localhost:27017/axiosecom', {useNewUrlParser : true, useUnifiedTopology : true})
        .then(()=>{console.log("DB connected successfully!");})
        .catch((err)=>{console.log(err.message);
});

axios.get('http://192.168.0.104:8000/api/products/getall')
        .then (result =>{console.log("result", result.data);})
        .catch (err =>{console.log("err", err.message)
});

