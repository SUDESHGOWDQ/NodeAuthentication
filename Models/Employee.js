const mongoose = require('mongoose')

const EmployeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const EmployeeModel = mongoose.model("employee",EmployeSchema)
module.exports = EmployeeModel