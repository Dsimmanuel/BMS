import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {

  route={
    routeNo:"",
    busNo:"",
    seats:"",
    image:"",
    
    
    }
      

  constructor(private api:ApiService ) { 
    api.viewbpoint().subscribe(
      (response)=>{
        this.data=response
      }
    )
    

  }

  ngOnInit(): void {
    
    (function () {
      
      var forms = document.querySelectorAll('.needs-validation')
    
      
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event:any) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            
          }, false)
        })
    })()
  }
  
  onEdit(item:any) {
    item.isEdit = true
  }
  offEdit(item:any){
    item.isEdit = true
  }

  isAdd =false
  
 IsAdd(){
   this.isAdd=true 
 } 

  
  


  Addroute(){

    console.log(this.route)
    this.api.addroute(this.route).subscribe(
      (data)=>{
        console.log(data)
        
      }
    )
  }
 







data:any=[]

}
