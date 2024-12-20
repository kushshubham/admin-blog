import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.router.js'
import authRoutes from './routes/auth.router.js'
import next from 'next'
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('db is connected')
}).catch(err =>{
    console.log(err)
})

app.use(express.json())

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
app.use('/api/user', userRoutes) 
app.use('/api/auth', authRoutes)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})