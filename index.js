const express = require('express')
require('dotenv').config()
const  cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use(cors())
app.get('/' , (req , res) => {
    res.send('Hello World social media app ')
})

const userRoutes = require('./routes/user.router')

app.use('/users' , userRoutes)


mongoose.connect(process.env.CONNECTION_STRING_ATLAS , 
    { 
        useNewUrlParser: false ,
        useUnifiedTopology: false 
    } 
)
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "connection error:"));
db.once("open" , function () {
    console.log(" DataBase  Connected successfuly");
    });


app.listen(process.env.PORT , () => {
    console.log(`app listing  on port ${process.env.PORT}`)
})





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri  = "mongodb+srv://houssem:Acer_2510@cluster0.gnf7w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


