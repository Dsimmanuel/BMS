import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private api:ApiService) {
    this.user = this.api.getUser()
    if(this.user){
      console.log(this.user)
      
    }
   }

  ngOnInit(): void {
  }
  user:any=[]

}
