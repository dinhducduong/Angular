import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  list: any = [];
  constructor(private UserSevice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.UserSevice.listUser().subscribe(data => {
      this.list = data

    })

  }
  edit(item: any) {
    this.UserSevice.get(item)
      .subscribe(data => {
        if (data.roles == 1) {
          this.UserSevice.editUser({
            name: data.name,
            email: data.email,
            googleId: data.googleId,
            avatar: data.avatar,
            roles: 2,
          }, data['id'])
            .subscribe(data => {
              this.router.navigate(['student'])
            })
        } else if (data.roles == 2) {
          this.UserSevice.editUser({
            name: data.name,
            email: data.email,
            googleId: data.googleId,
            avatar: data.avatar,
            roles: 1,
          }, data['id'])
            .subscribe(data => {
              this.router.navigate(['student'])
            })
        }
      })
  }

}
