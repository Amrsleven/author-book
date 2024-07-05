import { connectDB } from "../connection.js";
import Book from "../models/book.model.js"

export const greet =  (req,res) => { res.json("hello book") };

//create book
export const createBook = async(req,res)=>{
const{title,content,author,publishedDate}=req.body;
const isBookExist = await Book.findOne({title})
if (isBookExist){return res.status(400).json({message:"book already exists"})};
const newBook = await Book.create({title,content,author,publishedDate})
res.status(200).json({message:"book created",newBook})
}

//retrieve all books
export const booksList = async(req,res)=>{
      const booksList = await Book.find();
      res.json({message:"list of books: ",booksList})
}

//get specific book by id
export const specificBook = async(req,res)=>{
        const {_id}= req.body;
        const isBookExist = await Book.findOne({_id});
        if(!isBookExist){return res.status(404).json({message:"no such book found"})};
       res.json({message: "specific book found successfully",isBookExist })
}

//update book by id
export const updateBook= async(req,res)=>{
      const {_id}= req.params;
      const {content,publishedDate}=req.body;
      const updatedBook = await Book.findByIdAndUpdate( _id ,{content,publishedDate},{new:true});
      if(!updatedBook){return res.status(404).json("no book found to be updated")};
      res.status(200).json({message:"book updated successfully", updatedBook })
}

//delete book by id
export const deleteBook= async(req,res)=>{
      const {_id}= req.params;
      const deletedBook = await Book.findByIdAndDelete(_id)
      if(!deletedBook ){return res.status(404).json("no book found to be deleted")};
      res.json({message:"book deleted successfully", deletedBook  })
}