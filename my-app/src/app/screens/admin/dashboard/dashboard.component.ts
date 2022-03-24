import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  remove(id: any) {
    this.SubjectServices.remove(id).subscribe(data => {
      this.subjects = this.subjects.filter(item => item.id != id);
    })
  }
}
