import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaintadmin',
  templateUrl: './complaintadmin.component.html',
  styleUrls: ['./complaintadmin.component.css']
})
export class ComplaintadminComponent implements OnInit {

  response={
    reply:""
  }

  constructor(private api:ApiService) {
    api.viewcomplaint().subscribe(
      (response)=>{
        this.data=response
        console.log(this.data)
      }
    )
  }

  ngOnInit(): void {
    
  }
 
  isadd=false
  addresponse(){
    this.isadd=true
  }

  onEdit(item:any){
    item.isEdit=true
  }
  
  Updateresponse(i:any){
    
    this.api.updateresponse(i).subscribe(
      (data)=>{
        console.log(data)
        this.api.viewcomplaint().subscribe(
          (response)=>{
            this.data=response
            console.log(this.data)
          }
        )
      }
      
    )
  }

  Delete(i:any){
    console.log(i)
    this.api.deletecomplaint(i._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==i)
      }
    )
  }
 
  

  data:any=[]
  
}
