const app=require('./app')
require('dotenv').config()
app.listen(3000,()=>{
    console.log(' the server is listening at port 3000')
})