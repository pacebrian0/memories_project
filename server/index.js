import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();
app.use(cors());



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://pacebrian0:XkvPv8dAuSy2Ztf8@cluster0.ld6x2je.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));




