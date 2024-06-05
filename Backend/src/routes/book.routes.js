import { Router} from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createBook, deleteBook, updateBook, getBookByItsID } from '../controllers/book.controllers.js';

const router = Router();


router.route('/books').post(
upload.fields([
    {
        name:"coverImage",
        maxCount:1,
    }
]),
createBook);

router.route('/books/:id').delete( deleteBook);

router.route('/books/:id').put(updateBook);

router.route('/books/:id').get(getBookByItsID);

export default router