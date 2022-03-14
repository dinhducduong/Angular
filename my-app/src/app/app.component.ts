import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/heroes")
      .subscribe(data => {
        this.heroes = data;
      })
  }

  heroes: Array<any> = [
    {
      code: "sgk",
      name: "Songoku",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      gender: "Nam"
    },
    {
      code: "mab",
      name: "Ma bư",
      avatar: "https://snkrvn.com/wp-content/uploads/2018/01/maxresdefault-960x640.jpg",
      gender: "Nam"
    }
  ];
  formHero: any = {
    code: "",
    name: "",
    avatar: "",
    gender: ""
  };
  //

  removeHeroes(hero: any) {
    this.heroes = this.heroes.filter(item => item.code != hero.code);
  }

  submitForm() {
    const newHero = { ...this.formHero };
    let index = -1;
    this.heroes.forEach((v, i) => {
      if (v.code == newHero.code) {
        index = i;
        return;
      }
    });
    if (index == -1) {
      this.heroes.push(newHero);
    } else {
      this.heroes[index] = newHero;
    }


    this.formHero = {
      code: "",
      name: "",
      avatar: "",
      gender: "nữ"
    };
  }
  update(item: any) {
    this.formHero = { ...item };
  }
  ///////
  emenies: Array<any> = [

    {
      code: 1,
      name: "emenies 1",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      heathling: 122,
      amor: 12334

    },
    {
      code: 2,
      name: "emenies 2",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      heathling: 125,
      amor: 12334

    },
    {
      code: 3,
      name: "emenies 3",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      heathling: 121,
      amor: 12334

    },

  ];
  formEmenies: any = {
    code: "",
    name: "",
    avatar: "",
    heathling: "",
    amor: "",
  };
  submitFormEmenies() {
    const post = { ...this.formEmenies };
    let index = -1;
    this.emenies.forEach((v, i) => {
      if (v.code == post.code) {
        index = i;
        return;
      }
    });
    if (index == -1) {
      this.emenies.push(post);
    } else {
      this.emenies[index] = post;
    }


    this.formEmenies = {
      code: "",
      name: "",
      avatar: "",
      heathling: "",
      amor: "",
    };
  }
  updateEmenies(item: any) {
    this.formEmenies = { ...item };
  }
  removeEmenies(eme: any) {
    this.emenies = this.emenies.filter(item => item.code != eme.code);
  }
}