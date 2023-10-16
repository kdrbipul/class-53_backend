const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


// Midleware
app.use(cors())
app.use(express.json())

const users = [
    {
        "id":"101",
        "name":"AbdulMotin",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "id":"102",
        "name":"AbdurRazzak",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "id":"103",
        "name":"AbdulHamid",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    },
    {
        "id":"104",
        "name":"AbdulKader",
        "age" : 25,
        "address": "rangpur",
        "area" :"rampura",
        "post" : "upashahar",
        "post_code" : 5401,
        "p/s" : "kotwali Metro"
    }
]

app.get('/',(req, res) =>{
    res.send('second server is time to run');
});

app.get('/users', (req, res) =>{
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log(req);
    const user = (req.body);
    users.push(user);
    res.send(users)
})

app.get('/users', (req, res) => {
    // console.log(req.query.name);
    if(req.query.name){
        const searched = req.query.name;
        const filtered = users.filter(user => user.name === searched);
        res.send(filtered);
    }else{
        res.send(users)
    }
})

app.listen(port, () =>{
    console.log(`our server is successfully run ${port}`);
})