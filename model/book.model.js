const mongoose=require("mongoose")

// Book model
const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    price: Number,
},{
    versionKey:false
})





const BookModel = mongoose.model("book",BookSchema)

module.exports={
    BookModel
}