import { connectDB } from "../connection.js";
import Author from "../models/author.model.js"
import Book from "../models/book.model.js"

export const greet =  (req,res) => { res.json("hello author") };

//create author
export const createAuthor = async(req,res)=>{
    const{name,bio,birthDate,books}=req.body;
    const isAuthorExist = await Author.findOne({name})
    if (isAuthorExist){return res.status(400).json({message:"author already exists"})};
    const newAuthor = await Author.create({name,bio,birthDate,books})
    res.status(200).json({message:"author created",newAuthor})
    }

//retrieve all authors
export const authorsList = async(req,res)=>{
    const authorsList = await Author.find();
    res.json({message:"list of authors: ",authorsList})
}

//get specific author by id
export const specificAuthor = async(req,res)=>{
    const {_id}= req.body;
    const isAuthorExist = await Author.findOne({_id});
    if(!isAuthorExist){return res.status(404).json({message:"no such book found"})};
    const booksWritten = await Book.find({author:isAuthorExist.name})
   res.json({message: "specific author found successfully",isAuthorExist , authorBooks: booksWritten })
}

//update author by id
export const updateAuthor = async(req,res)=>{
    const {_id}= req.params;
    const {bio,books}=req.body;
    const updatedAuthor = await Author.findByIdAndUpdate( _id ,{bio,books},{new:true});
    if(!updatedAuthor){return res.status(404).json("no author found to be updated")};
    res.status(200).json({message:"author updated successfully", updatedAuthor })
}

//delete author by id
export const deleteAuthor= async(req,res)=>{
    const {_id}= req.params;
    const deletedAuthor = await Author.findByIdAndDelete(_id)
    if(!deletedAuthor ){return res.status(404).json("no author found to be deleted")};
    res.json({message:"Author deleted successfully", deletedAuthor })
}

