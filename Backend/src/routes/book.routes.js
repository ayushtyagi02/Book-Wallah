import { Router} from "express";
import { createBook, deleteBook, updateBook, getBookById } from '../controllers/BookController';

const router = Router();


router.post('/books', createBook);

router.delete('/books/:id', deleteBook);

router.put('/books/:id', updateBook);

router.get('/books/:id', getBookById);

export default router