import  express from "express";
import { addNewBook, getAllBooks } from "../controller/bookControler";
import validate from "../middlewere/validate";
import { addBooksSchema } from "../zod_schema/zodSchema";

const router = express.Router();

router.get('/', getAllBooks)
router.post('/',validate(addBooksSchema) ,addNewBook)

export default router;