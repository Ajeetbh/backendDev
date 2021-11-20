// const http=require('http');
// module.exports=http.createServer((request, response)=>{
//     if(request.method=='GET'){
//      response.write("Gotcha,, you did  get request2")
//      response.end()
//     }
//     if(request.method=='POST'){
//      response.write("Gotcha,, you did post request2")
//      response.end()
//     }
//     if(request.method=='DELETE'){
//      response.write("Gotcha,, you did  delete request2")
//      response.end()
//     }
//     if(request.method=='PUT'){
//      response.write("Gotcha,, you did  put request2")
//      response.end()
//     }
//     if(request.method=='PATCH'){
//      response.write("Gotcha,, you did patch request2")
//      response.end()
//     }
//  })
//  //  http://localhost:8000/  homepage



//for user
const http=require('http');
const user = require('./user');
module.exports=http.createServer((request, response)=>{
    if(request.url=='/user'){
        response.write('this is user call');
        response.end();
    }
    if(request.method=='GET'){
     response.write("Gotcha,, you did a get request2")
     response.end()
    }
    if(request.method=='POST'){
     response.write("Gotcha,, you did a post request2")
     response.end()
    }
    if(request.method=='DELETE'){
     response.write("Gotcha,, you did a delete request2")
     response.end()
    }
    if(request.method=='PUT'){
     response.write("Gotcha,, you did a put request2")
     response.end()
    }
    if(request.method=='PATCH'){
     response.write("Gotcha,, you did a patch request2")
     response.end()
    }
 })
//  //  http://localhost:8000/  homepage


