import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "";
  email = "";
  phone = "";
  hometown = "";
  bird = "";
  changeName(e: any) {
    this.name = e.target.value;
  }
  changeEmail(e: any) {
    this.email = e.target.value;
  }
  changePhone(e: any) {
    this.phone = e.target.value;
  }
  changeHometown(e: any) {
    this.hometown = e.target.value;
  }
  changeBird(e: any) {
    this.bird = e.target.value;
  }

}
