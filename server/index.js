require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const {connectToDb} = require('./connection');

app.listen((process.env.PORT),()=>{
    console.log(`Server running at port: ${process.env.PORT}`)
})

connectToDb();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user",userRoutes);