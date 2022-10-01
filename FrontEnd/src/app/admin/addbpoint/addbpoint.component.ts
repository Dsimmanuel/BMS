import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addbpoint',
  templateUrl: './addbpoint.component.html',
  styleUrls: ['./addbpoint.component.css']
})
export class AddbpointComponent implements OnInit {

 
  boardingPoints={
    routeNo:"",
    stopNo:"",
    point:"",
    time:""
  }

constructor(private api:ApiService) {
  
  api.viewRoute().subscribe(
    (response)=>{
      this.data1=response
      
    }
  )
 }
add(i:any){
  console.log(i)
  this.boardingPoints.routeNo=i.routeNo
  console.log(this.boardingPoints)
  this.api.viewpoint(i).subscribe(
    
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
offEdit(item:any){
  item.isEdit = false
}

isAdd =false

IsAdd(){
 this.isAdd=true 
} 




Addbpoint(){
console.log(this.boardingPoints)
this.api.addbpoint(this.boardingPoints).subscribe(
  (data)=>{
    console.log(data)
    this.isAdd =false
    this.api.viewpoint(this.boardingPoints).subscribe(
      (response)=>{
        this.data=response
        
      }
    )

  }
)
}
Deletebpoint(datas:any){
this.api.deletebpoint(datas._id).subscribe(
  (data)=>{
     console.log(data);
     this.data = this.data.filter((u:any)=>u!==datas)
  }
)

}

Updatebpoint(i:any){
    
  console.log(i)
  
  this.api.updatebpoint(i).subscribe(
    (data)=>{
      console.log(data)
      this.offEdit(i)
      this.api.viewpoint(data).subscribe(
    
        (response)=>{
         
          this.data2=response 
        }
      )
      
    }
    
  )

}


data:any=[]
data1:any=[]
data2:any=[]

}
