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
    
    console.log()
    this.api.updateresponse(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }
 
  

  data:any=[]
  
}
