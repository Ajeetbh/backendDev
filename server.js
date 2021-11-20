// var bodyParser=require('body-parser')
// const express=require('express')();
// const PORT=8000
// express.use(bodyParser.json())

// //http://localhost:8000/ -get request
// express.get('/',(req,res)=>{
//     res.send('Hi I am from express')
// });
// express.listen(PORT,()=>{
//     console.log('I am listening from Express')
// })


//router

var bodyParser=require('body-parser')
var userRouter=require('./router/user.js')
var tutorialRouter=require('./router/tutorial.js')
var express=require('express')();
var expressClass=require('express');
const PORT=8000
express.use(bodyParser.json())


express.get('/',(req,res)=>{
    res.send('Hi I am from express')
});
//Two things for router in express
//1. create the router
//2. use the router
//http://localhost:8000/user
// userRouter=expressClass.Router() //create this in router folder named user.js
express.use('/user',userRouter)
express.use('/tutorial',tutorialRouter)
express.listen(PORT,()=>{
    console.log('I am listening from Express')
})


