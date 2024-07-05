import { Router } from "express";
const router = Router();
import * as bookController from "./book.controller.js";
import { errorHandler } from "../error/error-hanle.middlewar.js";


router.get("/bookHi",bookController.greet)

router.post("/createBook",errorHandler(bookController.createBook))
router.get("/booksList",errorHandler(bookController.booksList))
router.get("/specificBook",errorHandler(bookController.specificBook))
router.patch('/updateBook/:_id',errorHandler(bookController.updateBook))
router.delete('/deleteBook/:_id',errorHandler(bookController.deleteBook))


export default router;