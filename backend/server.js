import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import errorHandler from './middlwares/errorMiddleware.js'
import authRoutes from './routes/Auth/authRoutes.js'
import statusRoutes from './routes/Status/statusRoutes.js'
import personRoutes from './routes/Person/personRoutes.js'
import userRoutes from './routes/User/userRoutes.js'
import { PrismaClient } from '@prisma/client'

// define config
dotenv.config()

const app=express();
const prisma = new PrismaClient()    


app.use(cors({origin:[process.env.CLIENT_URL]}));

app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({extended:true,limit:'100mb'}));


app.use('/auth',authRoutes);
app.use('/status',statusRoutes);
app.use('/person',personRoutes);
app.use('/user',userRoutes)
const PORT=process.env.PORT|5000;
app.use(errorHandler)
app.listen(PORT,()=>console.log(`Server Running on PORT ${5000}`))