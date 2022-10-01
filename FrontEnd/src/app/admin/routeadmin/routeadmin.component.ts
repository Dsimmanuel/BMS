import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-routeadmin',
  templateUrl: './routeadmin.component.html',
  styleUrls: ['./routeadmin.component.css']
})
export class RouteadminComponent implements OnInit {

  route={
    routeNo:"",
    busNo:"",
    seats:"",
    image:"",

    }

  constructor(private api:ApiService) {
    api.viewRoute().subscribe(
      (response)=>{
        this.data=response
        
      }
    )
    

    
    }
      
  

  onEdit(item:any) {
    item.isEdit = true
  }
  isAdd =false
  
 IsAdd(){
   this.isAdd=true 
 } 

  Deleteroute(datas:any){
    this.api.deleteroute(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  
  Updateroute(i:any){
    
    console.log()
    this.api.updateroute(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }
  

   

  ngOnInit(): void {
  }
 data:any=[]
}
