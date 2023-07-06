const express=require("express")
const { BookModel } = require("../model/book.model")
const bookRouter=express.Router()


// Adding book
bookRouter.post("/addbook",async(req,res)=>{
    const payload=req.body
    const post=new BookModel(payload)
    await post.save()
    res.status(200).send(" post has been created")
})



// Retrieve all the books
bookRouter.get("/",async(req,res)=>{

    const post=await BookModel.find()
    res.status(200).send(post)
})




// Delete the book
bookRouter.delete("/delete/:bookID",async(req,res)=>{
    const {bookID}=req.params
    try {
        await BookModel.findByIdAndDelete({_id:bookID})
        res.status(200).send({"msg":"deleted"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
   
})

// Filter Books API
bookRouter.get('/filter', async (req, res) => {
    try {
      const { genre } = req.query;
  
      const filteredBooks = await BookModel.find({ genre });
      res.status(200).json(filteredBooks);
    } catch (error) {
      res.status(500).send('Error retrieving books');
    }
});
  
  // Sort Books API
bookRouter.get('/sort', async (req, res) => {
    try {
      const { price } = req.query;
      const sortDirection = price === 'asc' ? 1 : -1;
  
      const sortedBooks = await BookModel.find().sort({ price: sortDirection });
      res.status(200).json(sortedBooks);
    } catch (error) {
      res.status(500).send('Error retrieving books');
    }
});



module.exports={
    bookRouter
}