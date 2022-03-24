import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subjects: Array<any> = [];
  constructor(private SubjectServices: SubjectServices) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.SubjectServices.listSubjects().subscribe(data => {
      this.subjects = data
    })
  }

}
