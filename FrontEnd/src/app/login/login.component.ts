import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  template: ` `,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={
    luserName:"",
    lpassword:""
  }

  user={
    name:"",
    userName:"",
    registerNumber:"",
    address:"",
    department:"",
    semester:"",
    email:"",
    boardingPoint:"",
    password:"",
    confirmPassword:""
  }
  p={
    pass:""
  }

  logdata:any=[]


  constructor(private api:ApiService,
    private route:Router ) {
      this.api.viewbpoint().subscribe(
      
        (response)=>{
          this.data=response
          this.data2= this.data.filter(function(x:any) { return x !== "Maranalloor"; });
          console.log(this.data2)
          
          
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

  Adduser(){
    console.log(this.user)
    if(this.user.password == this.user.confirmPassword)
    {
      console.log("password match")
      this.api.addrequest(this.user).subscribe(
        (data)=>{
          alert("success");
        }
        
      )
      
    }else{
      alert("password doesn't match !")
    }
  }


  Login(){
    console.log(this.login)
    this.api.login(this.login).subscribe(
      (response)=>{
        console.log(response.message)
        if(response.data){
        this.logdata=response
        this.api.saveUser(this.logdata)
        this.response = this.api.getUser()
        
        if(this.response){ 
          console.log(this.response)
          console.log(this.response.data.role)
          if(this.response.data.role == "admin"){
            this.api.saveRole("admin")
            this.route.navigate(['/student'])
            
          }
          if(this.response.data.role == "driver"){
            this.api.saveRole("driver")
            this.route.navigate(['/droute'])
          }
          if(this.response.data.role == "student"){
            this.api.saveRole("student")
            this.route.navigate(['/route'])
          }
        
        }
        
      }
      if(response.message){
        this.message=response.message
        console.log("dj"+this.message)
      }
      
    }
    )
    
  }
  response:any=[]
  data:any=[]
  data2:any=[]
  message:any=[]
}
