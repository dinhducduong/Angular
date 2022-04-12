import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const data = JSON.parse(<any>localStorage.getItem("user"));
    const name = data;
    if (name['roles'] !== 2) {
      this.router.navigate(['/']);
    }
  }
  logout(): void {
    this.authService.logout();
  }

}
