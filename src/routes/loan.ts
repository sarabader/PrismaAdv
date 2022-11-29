import  express from "express";
import validate from "../middlewere/validate";
import { addNewLoan,getAllLoan } from "../controller/loanControler";
import { addLoanSchema } from "../zod_schema/zodSchema";



const router = express.Router();

router.get('/', getAllLoan)
router.post('/',validate(addLoanSchema), addNewLoan)

export default router;