
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
   complaint={
   date: "", 
   happend:"",
   right:"",
  }

  constructor(private api:ApiService ) { }

  ngOnInit(): void {
    
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
  

}
