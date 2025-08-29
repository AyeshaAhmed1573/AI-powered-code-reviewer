const express=require('express')
const aiController=require('../controllers/Ai.controller')
const router=express.Router()
router.post('/get_response',aiController.getReview)
module.exports=router