const express = require('express');
const cors = require('cors')
require('dotenv').config()
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




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}<password>@cluster0.ocxmtap.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


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