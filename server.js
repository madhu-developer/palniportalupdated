const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterUser = require('./model')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee")
//mongoose.connect("mongodb://192.168.21.184/employee");

app.post('/signup',async(req,res)=>{
  try{
    const {name,mailId,password,confirmpassword} = req.body;
    let exist = await RegisterUser.findOne({mailId:mailId})
    if (exist){
      return res.status(400).send("User already exists")
    }
    if (password !== confirmpassword){
      return res.status(400).send("Passwords are not matching")
    }
    let newUser = new RegisterUser({
      name,mailId,password,confirmpassword
    })
    await newUser.save();
    res.status(200).send("Registered Successfully!")

  } 
  catch(err){
    console.log(err)
    return res.status(500).send("Internal Server Error")
  }
})

app.get('/',(req,res)=>{
  res.send('hello world!')
})


app.listen(5050,()=>{
  console.log("server is running...")
})

