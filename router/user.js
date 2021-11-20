
//router
// var expressClass=require('express');
// var userRouter=expressClass.Router()

// // /-http://localhost:8000/user+/
// // userRouter.get('/',(req,res)=>{
// //     res.send('I am get request of user api')
// // })

// //we can use as
// var getUser=(req,res)=>{
//     res.send("I am get request USER api")
// }
// userRouter.get('/',getUser);


// // /user-http://localhost:8000/user+/user
// userRouter.get('/user',(req,res)=>{
//     res.send('I am get request of user/user api')
// })
// module.exports=userRouter



var expressClass=require('express');
var userController=require('../controller/user.js')
var userRouter=expressClass.Router()

//http://localhost:8000/user
userRouter.get('/',userController.getUser);
userRouter.post('/',userController.createUser);
userRouter.delete('/',userController.deleteUser);
userRouter.put('/',userController.updateUser);
userRouter.patch('/',userController.patchUser);

// /user-http://localhost:8000/user+/user
userRouter.get('/user',(req,res)=>{
    res.send('I am get request of user/user api')
})
module.exports=userRouter

