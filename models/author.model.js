import mongoose from "mongoose";
import Book from "../models/book.model.js"

const {Schema , model} = mongoose;

const authorSchema = new Schema ({
    name: {type: String , required:true , unique:true},
    bio: {type: String , required:true },
    birthDate: {type: Date , required:true},
    books: [{type: Schema.Types.ObjectId , ref:"Book" }]
},{
    timestamps:true
});

export default mongoose.models.Author || model("Author",authorSchema);

