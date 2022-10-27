import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   USER_KEY:any='user'
   role_key:any
 
  constructor(
    private http:HttpClient,
    private route:Router
    ) { }


  //
  log:any=[]
  login=(login:any)=>{
    return this.log = this.http.post<any>("http://localhost:3000/login",login) 
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }
  public deletetokenuser():any{
    window.sessionStorage.removeItem(this.USER_KEY);
  }
  public saveRole(role: any): void {
    window.sessionStorage.removeItem(this.role_key);
    window.sessionStorage.setItem(this.role_key, JSON.stringify(role));
   
  }
  public getRole(): any {
    
    const role = window.sessionStorage.getItem(this.role_key);
    console.log(role)
    if (role) {
      return JSON.parse(role);
    }
  }
  public deleterole():any{
    window.sessionStorage.removeItem(this.role_key);
    console.log(window.sessionStorage.getItem(this.USER_KEY))
  }

 
 


  //student requests  




  addrequest=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/request",user)
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
  deleteroute=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deleteRoute/"+id)
  }

  updateroute=(driver:any)=>{
    return this.http.put<any>("http://localhost:3000/updateRoute/"+driver._id,driver)
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
  viewpoint=(i:any)=>{
    console.log(i.routeNo)
    return this.http.post<any>("http://localhost:3000/viewbpoint",i)
  }
  updatebpoint=(point:any)=>{
    return this.http.put<any>("http://localhost:3000/updateBpoint/"+point._id,point)
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
  
  deletecomplaint=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/deletecomplaint/"+id)
  }
  responsecomplaint=(i:any)=>{
    return this.http.post<any>("http://localhost:3000/responsecomplaint",i)
  }

  //user routeDetails



  
  busdetails=(point:any)=>{
    return this.http.post<any>("http://localhost:3000/busdetails/"+point,point)
  }
  driverdetails=(driver:any)=>{
    return this.http.post<any>("http://localhost:3000/driverdetails/"+driver,driver)
  }
  getbpoint=(point:any)=>{
    return this.http.post<any>("http://localhost:3000/getbpoint/"+point,point)
  }


  //Driver Route Details
  


  bdetails=(point:any)=>{
   
    return this.http.post<any>("http://localhost:3000/bdetails",point)
  }
  ddetails=(driver:any)=>{
    return this.http.post<any>("http://localhost:3000/ddetails",driver)
  }
  dbpoint=(point:any)=>{
    return this.http.post<any>("http://localhost:3000/dbpoint",point)
  }

}


  
  

