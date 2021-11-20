//const http = require('http')
// console.log("I am trying to print http object")
// console.log(http)
// const homeApi=function(request, response){
//     console.log("Heyyyyy I am the homeApi...and I got called by the client ")
//     response.write("Hey I am Home API, and I am the response from the backend")
//     response.end()
// }
// const server=http.createServer(homeApi) // http://localhost:8000
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listening server');
// });




// const http=require('http');
// const server=http.createServer((request, response)=>{
//     if(request.method=='GET'){
//      response.write("Gotcha,, you did a get request")
//      response.end()
//     }
//     if(request.method=='POST'){
//      response.write("Gotcha,, you did a post request")
//      response.end()
//     }
//     if(request.method=='DELETE'){
//      response.write("Gotcha,, you did a delete request")
//      response.end()
//     }
//     if(request.method=='PUT'){
//      response.write("Gotcha,, you did a put request")
//      response.end()
//     }
//     if(request.method=='PATCH'){
//      response.write("Gotcha,, you did a patch request")
//      response.end()
//     }
//  })
//  //  http://localhost:8000/  homepage
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listning success');
// })




//export
// const http=require('http');
// const server=require('./controler/home.js')
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listning success2');
// })
//http://localhost:8000/  homepage

const http=require('http');
const url=require('url');
const server=require('../controler/home.js')
server.listen(8000,'127.0.0.1',()=>{
    console.log('listning success3');
})

//http://localhost:8000/user  userAPI



