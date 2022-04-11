
import express from 'express'
import dotenv from 'dotenv'
import eventRoutes from './routes/eventRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
//import { protect } from './middleware/authMiddleware.js'

const app = express()


dotenv.config();
connectDB();

app.get('/', (req,res) => {
    res.json({'msg': "Hello"})
    })
app.use(express.json())
app.use('/api/events', eventRoutes)
app.use('/api/users',userRoutes)
app.use(errorHandler)
app.use(notFound)
//app.use(protect)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running at port ${PORT}`))

