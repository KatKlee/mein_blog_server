import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'
import { getEntry, addBlogpost } from './controller/blogcontroller.js'

const PORT = 9898
const app = express()

const upload = multer({ dest: './public' })

// Middlewares
app.use(morgan('dev')) // to log HTTP requests and errors, and simplify the process
app.use('/public', express.static('public')) // to serve static files from directory 'public'
app.use(cors()) // to access resources from remote hosts/different origin or domain

// routing methods
app.get('/blogposts', getEntry) // request to get data
app.post('/blogposts', upload.single('blogimage'), addBlogpost) // request to add new data

app.listen(PORT, () => console.log('Server runs on port:', PORT))