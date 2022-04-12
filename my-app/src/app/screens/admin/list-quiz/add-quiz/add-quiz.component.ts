import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  id: string = "";

  formQuiz: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    code_id: new FormControl('', [

    ])
  })


  constructor(private ActivatedRouter: ActivatedRoute, private quiz: QuizService, private AddQuizServices: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe(data => {
      const { id } = data;
      this.id = id;

    })
  }
  addQuiz() {
    this.AddQuizServices.AddQuizs(this.formQuiz.value).subscribe(data => {
      this.router.navigate(['/cp-admin/quiz/' + this.id]);
    })
  }

}
