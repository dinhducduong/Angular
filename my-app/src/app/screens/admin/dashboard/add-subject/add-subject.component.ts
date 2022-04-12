import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectServices } from 'src/app/services/subject.service';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private AddSubjectServices: SubjectServices, private router: Router) { }

  ngOnInit(): void {


  }
  formSubject: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    Code: new FormControl('', [
      Validators.required
    ]),
    Logo: new FormControl('', [
      Validators.required
    ])
  })
  addSubject() {
    this.AddSubjectServices.AddSubjects(this.formSubject.value).subscribe(data => {
      this.router.navigate(['cp-admin/']);
    })
  }

}
