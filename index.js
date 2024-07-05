import express from "express"
import { connectDB } from "./connection.js"
import bookRouter from "./book/book.router.js"
import authorRouter from "./author/author.router.js"
import Book from "./models/book.model.js"
import Author from "./models/author.model.js"
import { globalResponse } from "./error/error-hanle.middlewar.js"



const app = express()
const port = 3000

app.use(express.json())
app.use("/book",bookRouter)
app.use("/author",authorRouter)


app.use(globalResponse);
connectDB()


console.log("hello")
app.get("/",(req,res)=>{res.send("hello query")})
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})

