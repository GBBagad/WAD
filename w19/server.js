const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/student");

// Schema
const Student = mongoose.model("studentmarks", {
    name: String,
    roll: Number,
    wad: Number,
    cc: Number,
    dsbda: Number,
    cns: Number,
    ai: Number
});


// 👉 c) Insert data
app.get('/insert', async (req, res) => {
    await Student.insertMany([
        {name:"A", roll:1, wad:25, cc:25, dsbda:25, cns:25, ai:25},
        {name:"B", roll:2, wad:30, cc:30, dsbda:30, cns:30, ai:30},
        {name:"C", roll:3, wad:15, cc:20, dsbda:10, cns:18, ai:12}
    ]);
    res.send("Inserted");
});


// 👉 d) Show all
app.get('/all', async (req, res) => {
    let data = await Student.find();
    let count = await Student.countDocuments();
    res.send({count, data});
});


// 👉 e) DSBDA > 20
app.get('/dsbda', async (req, res) => {
    let data = await Student.find({dsbda: {$gt: 20}});
    res.send(data);
});


// 👉 f) Update marks +10
app.get('/update/:name', async (req, res) => {
    await Student.updateOne(
        {name: req.params.name},
        {$inc: {wad:10, cc:10, dsbda:10, cns:10, ai:10}}
    );
    res.send("Updated");
});


// 👉 g) All subjects >25
app.get('/all25', async (req, res) => {
    let data = await Student.find({
        wad: {$gt:25},
        cc: {$gt:25},
        dsbda: {$gt:25},
        cns: {$gt:25},
        ai: {$gt:25}
    });
    res.send(data);
});


// 👉 h) less than 40 in CNS & DSBDA
app.get('/less40', async (req, res) => {
    let data = await Student.find({
        cns: {$lt:40},
        dsbda: {$lt:40}
    });
    res.send(data);
});


// 👉 i) Delete student
app.get('/delete/:name', async (req, res) => {
    await Student.deleteOne({name: req.params.name});
    res.send("Deleted");
});


// 👉 j) Table format
app.get('/table', async (req, res) => {
    let data = await Student.find();

    let html = "<table border='1'><tr><th>Name</th><th>Roll</th><th>WAD</th><th>DSBDA</th><th>CNS</th><th>CC</th><th>AI</th></tr>";

    data.forEach(d => {
        html += `<tr>
        <td>${d.name}</td>
        <td>${d.roll}</td>
        <td>${d.wad}</td>
        <td>${d.dsbda}</td>
        <td>${d.cns}</td>
        <td>${d.cc}</td>
        <td>${d.ai}</td>
        </tr>`;
    });

    html += "</table>";

    res.send(html);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});