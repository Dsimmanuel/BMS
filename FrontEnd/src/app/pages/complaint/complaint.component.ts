
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
   complaint={
   userName:"",
   registerNumber:"",
   date:"", 
   happend:"",
   right:"",
  }
  getc={
    userName:"",
  }

  constructor(private api:ApiService ) { }
  user:any=[]
  ngOnInit(): void {
    this.user = this.api.getUser()
    if(this.user){
      console.log(this.user)
      this.complaint.userName=this.user.data.userName
      this.complaint.registerNumber=this.user.data.registerNumber
      this.getc.userName=this.user.data.userName
    }
  }

    Complaint(){
    
    
    console.log(this.complaint)
    this.api.addcomplaint(this.complaint).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      }
    )
  }

  response(){
    this.api.responsecomplaint(this.getc).subscribe(
      (data)=>{
        this.data=data
        console.log(data)
      }
    )
  }
  
 data:any=[]
}
