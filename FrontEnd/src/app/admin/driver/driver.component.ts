import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driver={
  name:"",
  userName:"",
  contactNumber:"",
  email:"",
  driverId:"",
  routeNo:""

  }

  constructor(private api:ApiService) { 
    api.viewdriver().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }

  Deletedriver(datas:any){
    this.api.deletedriver(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  
  Updatedriver(i:any){
    
    console.log()
    this.api.updatedriver(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }



  data:any=[]
}
