const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB connect
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    genre: String
});

const Book = mongoose.model('Book', bookSchema);

// ➕ Add Book
app.post('/add', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send("Book Added");
});

// 📄 Get all books
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// ✏️ Update book
app.put('/update/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.send("Book Updated");
});

// ❌ Delete book
app.delete('/delete/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send("Book Deleted");
});

// Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});