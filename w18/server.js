const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/music')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const songSchema = new mongoose.Schema({
    Songname: String,
    Film: String,
    Music_director: String,
    Singer: String,
    Actor: String,
    Actress: String
});

const Song = mongoose.model("songdetails", songSchema);


// c) Insert 5 songs
app.get('/insert', async (req, res) => {
    await Song.insertMany([
        {Songname:"Song1", Film:"Film1", Music_director:"AR Rahman", Singer:"Shreya"},
        {Songname:"Song2", Film:"Film2", Music_director:"AR Rahman", Singer:"Arijit"},
        {Songname:"Song3", Film:"Film3", Music_director:"Pritam", Singer:"Arijit"},
        {Songname:"Song4", Film:"Film4", Music_director:"Pritam", Singer:"Shreya"},
        {Songname:"Song5", Film:"Film5", Music_director:"Vishal", Singer:"Sonu"}
    ]);
    res.send("Inserted");
});


// d) Count + display all
app.get('/all', async (req, res) => {
    const data = await Song.find();
    const count = await Song.countDocuments();
    res.json({count, data});
});


// e) Songs by Music Director
app.get('/director/:name', async (req, res) => {
    const data = await Song.find({Music_director: req.params.name});
    res.json(data);
});


// f) Director + Singer
app.get('/director/:name/singer/:singer', async (req, res) => {
    const data = await Song.find({
        Music_director: req.params.name,
        Singer: req.params.singer
    });
    res.json(data);
});


// g) Delete song
app.get('/delete/:name', async (req, res) => {
    await Song.deleteOne({Songname: req.params.name});
    res.send("Deleted");
});


// h) Add new song
app.get('/add', async (req, res) => {
    await Song.create({
        Songname:"MyFav",
        Film:"MyFilm",
        Music_director:"AR Rahman",
        Singer:"Arijit"
    });
    res.send("Added");
});


// i) Singer + Film
app.get('/film/:film/singer/:singer', async (req, res) => {
    const data = await Song.find({
        Film: req.params.film,
        Singer: req.params.singer
    });
    res.json(data);
});


// j) Update Actor Actress
app.get('/update/:name', async (req, res) => {
    await Song.updateOne(
        {Songname: req.params.name},
        {$set: {Actor:"ABC", Actress:"XYZ"}}
    );
    res.send("Updated");
});


// k) Table format
app.get('/table', async (req, res) => {
    const data = await Song.find();

    let html = "<table border='1'><tr><th>Song</th><th>Film</th><th>Director</th><th>Singer</th><th>Actor</th><th>Actress</th></tr>";

    data.forEach(d => {
        html += `<tr>
        <td>${d.Songname}</td>
        <td>${d.Film}</td>
        <td>${d.Music_director}</td>
        <td>${d.Singer}</td>
        <td>${d.Actor || ""}</td>
        <td>${d.Actress || ""}</td>
        </tr>`;
    });

    html += "</table>";

    res.send(html);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});