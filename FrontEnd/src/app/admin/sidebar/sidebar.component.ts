import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private api:ApiService,
    private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.api.deletetokenuser()
    this.api.deleterole()
    this.route.navigate(['/login'])
  }

}
