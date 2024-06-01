import { Router} from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createBook, deleteBook, updateBook, getBookById } from '../controllers/BookController';

const router = Router();


router.route('/books').post(
upload.field([
    {
        name:"coverImage",
        maxCount:1,
    }
]),
createBook);

router.route('/books/:id').delete( deleteBook);

router.route('/books/:id').put(updateBook);

router.route('/books/:id').get(getBookById);

export default router