const express = require('express')
const userRouter = require('./routes/user.routes')
const manualRouter = require('./routes/manual.routes')
const oemRouter = require('./routes/oem.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 8008

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/api', manualRouter)
app.use('/api', oemRouter)

app.use(express.static('static'))// for static any files

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
