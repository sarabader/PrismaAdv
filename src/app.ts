import express from 'express';
import 'dotenv/config'
import { connectDB } from './config/db';
import userRoute from './routes/user';
import booksRoute from './routes/book';
import loanRoute from './routes/loan';

const app = express();
connectDB();


app.use(express.json());
app.use('api/v1/user', userRoute)
app.use('api/v2/books', booksRoute)
app.use('api/v3/books', loanRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log('Server is running in port : ' + PORT);
});