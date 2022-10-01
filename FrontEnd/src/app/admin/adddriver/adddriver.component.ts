
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  driver={
    name:"",
    userName:"",
    contactNumber:"",
    email:"",
    driverId:"",
    routeNo:"",
    password:""
    }

  constructor(private api:ApiService) { }

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
  
  Adddriver(){
    
    console.log(this.driver)
    this.api.adddriver(this.driver).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      }
    )
  }

}