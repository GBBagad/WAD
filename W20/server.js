const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB");

// Schema
const Employee = mongoose.model("employees", {
    name: String,
    department: String,
    designation: String,
    salary: Number,
    joiningDate: String
});


// 👉 Add employee
app.post('/add', async (req, res) => {
    await Employee.create(req.body);
    res.send("Employee Added");
});


// 👉 View all employees
app.get('/all', async (req, res) => {
    let data = await Employee.find();
    res.send(data);
});


// 👉 Update employee
app.put('/update/:name', async (req, res) => {
    await Employee.updateOne(
        {name: req.params.name},
        {$set: req.body}
    );
    res.send("Employee Updated");
});


// 👉 Delete employee
app.delete('/delete/:name', async (req, res) => {
    await Employee.deleteOne({name: req.params.name});
    res.send("Employee Deleted");
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});