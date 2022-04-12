import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  name: string = "";
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    const data = JSON.parse(<any>localStorage.getItem("user"));
    this.name = data.name;
  }
  logout(): void {
    this.authService.logout();
  }

}
