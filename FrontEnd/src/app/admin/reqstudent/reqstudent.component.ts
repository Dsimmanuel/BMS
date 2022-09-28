import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reqstudent',
  templateUrl: './reqstudent.component.html',
  styleUrls: ['./reqstudent.component.css']
})
export class ReqstudentComponent implements OnInit {
  

  constructor(private api:ApiService) {
    api.viewrequest().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  

  Approve(user:any){
    
    console.log(user)
     this.api.adduser(user).subscribe(
       (data)=>{
         console.log(data)
         
       }
     )
     console.log(user._id)
     this.Reject(user)

  }
  

  Reject(datas:any){
    this.api.deleterequest(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }

  data:any=[]

}
