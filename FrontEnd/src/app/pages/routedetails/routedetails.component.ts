import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-routedetails',
  templateUrl: './routedetails.component.html',
  styleUrls: ['./routedetails.component.css']
})
export class RoutedetailsComponent implements OnInit {
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
  console.log("hai")
  console.log(this.user)
  console.log(this.user.data.boardingPoint)
  if(this.user.data.boardingPoint){
    this.user1=this.user.data.boardingPoint
    this.checkBpoint(this.user1)
  }

  }

  ngOnInit(): void {
    
  }

  checkBpoint(i:any){
    console.log(i)
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
  

  data:any=[]
  data1:any=[]
  data2:any=[]
  data3:any=[]
  data4:any=[]


}
