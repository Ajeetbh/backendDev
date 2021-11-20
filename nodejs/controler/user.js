const http=require('http');
module.exports=http.createServer((request, response)=>{
    if(request.method=='GET'){
     response.write("Gotcha,, you did a get request3")
     response.end()
    }
    if(request.method=='POST'){
     response.write("Gotcha,, you did a post request3")
     response.end()
    }
    if(request.method=='DELETE'){
     response.write("Gotcha,, you did a delete request3")
     response.end()
    }
    if(request.method=='PUT'){
     response.write("Gotcha,, you did a put request3")
     response.end()
    }
    if(request.method=='PATCH'){
     response.write("Gotcha,, you did a patch request3")
     response.end()
    }
 })
 //  http://localhost:8000/user  usrAPI

