import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-driverroute',
  templateUrl: './driverroute.component.html',
  styleUrls: ['./driverroute.component.css']
})
export class DriverrouteComponent implements OnInit {

  user:any=[]
  user1:any=[]
  constructor(private api:ApiService) { 
    this.api.viewbpoint().subscribe(
      
      (response)=>{
        this.data2=response
        this.data4= this.data2.filter(function(x:any) { return x !== "Maranalloor"; });
        console.log(this.data4)
        
        
      }
    )
  this.user=this.api.getUser()
  console.log("haidfdsd")
  console.log(this.user)
  console.log(this.user.data.routeNo)
  if(this.user.data.routeNo){
    this.user1 = this.user
    console.log("routeno:")
    console.log(this.user1)
    this.checkRoute(this.user1)
  }

  }

  ngOnInit(): void {
    
  }

  checkBpoint(i:any){
    console.log(i)
    console.log(i.data.routeNo)
    this.api.driverdetails(i).subscribe(
      
      (response)=>{
        this.data3=response
        console.log(this.data3)
        
        
      }
    )

    this.api.busdetails(i).subscribe(
      
      (response)=>{
        this.data1=response
        console.log(this.data1)
        
        
      }
    )

    this.api.getbpoint(i).subscribe(
      
      (response)=>{
        this.data=response
        console.log(this.data)
        
        
      }
    )
    
  }
  checkRoute(i:any){
    console.log(i)
    this.api.ddetails(i).subscribe(
      
      (response)=>{
        this.data3=response
        console.log(this.data3)
        
        
      }
    )

    this.api.bdetails(i).subscribe(
      
      (response)=>{
        this.data1=response
        console.log(this.data1)
        
        
      }
    )

    this.api.dbpoint(i).subscribe(
      
      (response)=>{
        this.data=response
        console.log(this.data)
        
        
      }
    )
    
  }
  

  data:any=[]
  data1:any=[]
  data2:any=[]
  data3:any=[]
  data4:any=[]
}
