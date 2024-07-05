import { Router } from "express";
const router = Router();
import * as authorController from "./author.controller.js";
import { errorHandler } from "../error/error-hanle.middlewar.js";

router.get("/authorHi",authorController.greet)

router.post("/createAuthor",errorHandler(authorController.createAuthor))
router.get("/authorsList",errorHandler(authorController.authorsList))
router.get("/specificAuthor",errorHandler(authorController.specificAuthor))
router.patch("/updateAuthor/:_id",errorHandler(authorController.updateAuthor))
router.delete("/deleteAuthor/:_id",errorHandler(authorController.deleteAuthor))


export default router;