import express from "express";
import { getUsers, postNewUser } from "../controller/userControler";
import validate from "../middlewere/validate";
import { addUserSchema } from "../zod_schema/zodSchema";

const userRouter = express.Router();

userRouter.get(`/`, getUsers);
userRouter.post(`/`, validate(addUserSchema), postNewUser);

export default userRouter;