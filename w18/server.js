const  express= require('express');
const mongoose=require('mongoose');

const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/music")


const Song=mongoose.model("song" ,{
      name: String,
    film: String,
    director: String,
    singer: String,
    actor: String,
    actress: String
});

app.get('/insert',async(req,res)=>{
    await Song.insertMany([
        {name:"A", film:"F1", director:"AR", singer:"Arijit"},
        {name:"B", film:"F2", director:"AR", singer:"Shreya"},
        {name:"C", film:"F3", director:"Pritam", singer:"Arijit"}
    ]);
    res.send("inserted")
});

app.get('/update/:name',async(req,res)=>{
    await Song.UpdateONE({
        name:req.params.name},
        {$set:{actor:"abc",actress:"xyz"}});
})
res.send("updated");

app.get('/delete/:name', async(req,res)=>
{
    await Song.deleteOne({name:req.params.name});
    res.send("deleted")
})

app.get('/table',async(req,res)=>
{
    let data=awit.song.find();

    let html="<table boarder=1> ";

        data .forEach(d =>{
            html +=`<tr>
                <td>${d.name}</td>
                <td>${d.film}</td>
                <td>${d.director}</td>
                <td>${d.singer}</td>
            </tr>`
        });
    html+="</table>"
    res.send(html);
});
app.listen(3000,() =>{
    console.log("server is running on https//localhost:3000")
});