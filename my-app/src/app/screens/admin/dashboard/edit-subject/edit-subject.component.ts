import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectServices } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  id: string = "";
  constructor(private ActivatedRouter: ActivatedRoute, private subjects: SubjectServices, private router: Router) { }
  formSubject: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    Code: new FormControl('', [
      Validators.required
    ])
  })
  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe(data => {
      const { id } = data;
      this.id = id;
      this.subjects.getSubject(id)
        .subscribe(data => {
          console.log(data);
          this.formSubject.patchValue(data)
        })
    })
  }
  editSubject() {
    this.subjects.editSubject(this.formSubject.value, this.id)
      .subscribe(data => {
        this.router.navigate(['/cp-admin']);
      })
  }
}
