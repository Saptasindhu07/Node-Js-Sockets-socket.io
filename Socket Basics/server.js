const PORT=8000
const cors=require('cors')
const express=require('express')
const app=express()
app.use(cors())
const server=require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})

io.on('connection',(socket)=>{
    console.log("connected")
})