import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient) { }


  //student requests  


  addrequest=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/addRequest",user)
  }

  viewrequest=()=>{
    return this.http.get<any>("http://localhost:3000/viewRequest")
  }
  deleterequest=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteRequest/"+id)
  }  


  //Approved students  


  adduser=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/register",user)
  }

  viewuser=()=>{
    return this.http.get<any>("http://localhost:3000/home")
  }
  deleteuser=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/delete/"+id)
  }

  updateuser=(user:any)=>{
    return this.http.put<any>("http://localhost:3000/update/"+user._id,user)
  }

  //driver

  adddriver=(driver:any)=>{
    return this.http.post<any>("http://localhost:3000/addDriver",driver)
  }

  viewdriver=()=>{
    return this.http.get<any>("http://localhost:3000/viewDriver")
  }
  deletedriver=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteDriver/"+id)
  }

  updatedriver=(driver:any)=>{
    return this.http.put<any>("http://localhost:3000/updateDriver/"+driver._id,driver)
  }

  //route
  addroute=(route:any)=>{
    return this.http.post<any>("http://localhost:3000/addRoute",route)
  }

  viewRoute=()=>{
    return this.http.get<any>("http://localhost:3000/viewRoute")
  }



  //BoardingPoint

  addbpoint=(bpoint:any)=>{
    return this.http.post<any>("http://localhost:3000/addBpoint",bpoint)
  }

  viewbpoint=()=>{
    return this.http.get<any>("http://localhost:3000/viewBpoint")
  }
  deletebpoint=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteBpoint/"+id)
  }


  //complaint


  addcomplaint=(complaint:any)=>{
    return this.http.post<any>("http://localhost:3000/addComplaint",complaint)
  }
  viewcomplaint=()=>{
    return this.http.get<any>("http://localhost:3000/viewComplaint")
  }

  updateresponse=(response:any)=>{
    return this.http.put<any>("http://localhost:3000/updateResponse/"+response._id,response)
  }


}


  
  

