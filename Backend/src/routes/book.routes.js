import { Router} from "express";
const router = Router()

import { createBook } from "../controllers/book.controllers.js"

router.post("/creatingBook",  createBook)

export default router