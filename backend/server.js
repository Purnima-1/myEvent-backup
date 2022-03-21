
import express from 'express'
import dotenv from 'dotenv'
import eventRoutes from './routes/eventRoutes.js'
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'

const app = express()


dotenv.config();
connectDB();

app.get('/', (req,res) => {
    res.json({'msg': "Hello"})
    })

app.use('/api/events', eventRoutes)
app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running at port ${PORT}`))

