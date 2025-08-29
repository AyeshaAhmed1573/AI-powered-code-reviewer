const express= require('express')
const app=express()
const cors=require('cors')
const aiRouter=require('./routers/Ai.routers')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
   res.send('hello world')
})
app.use('/ai',aiRouter)

module.exports= app