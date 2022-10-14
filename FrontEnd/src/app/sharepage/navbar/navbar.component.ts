import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  
  isStudent=false
  isAdmin=false
  isDriver=false
  isLoggedIn=false
  Role:any

  constructor(public api:ApiService,
    private route:Router) {
    
   }
  
  
  ngOnInit(): void {
      
    this.Role = this.api.getRole()
    if(this.Role){
      if(this.Role == "admin"){
        this.isAdmin=true
      }
      if(this.Role == "driver"){
        this.isDriver=true
      }
      if(this.Role == "student"){
        this.isStudent=true
      } 
      
    }
     
  }
  logout(){
    this.api.deletetokenuser()
    this.api.deleterole()
    this.route.navigate(['/login'])
  }


}
