const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel =require('./Models/Employee')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")
.then(()=>console.log("DB Connected"))


app.post('/login',(req,res)=>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("sucess")
            }
            else{
                res.json("The Password is Incorrect")
            }
        }
        else{
            res.json("No record Existed")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .then(err=>res.json(err))
})




app.listen(3000,()=>{
    console.log("server is Connected");
})