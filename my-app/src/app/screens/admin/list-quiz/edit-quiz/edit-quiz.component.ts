import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {
  id: string = "";
  id_q: string = "";
  formQuiz: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    code_id: new FormControl('', [

    ])
  })
  constructor(private quizService: QuizService, private router: Router, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe(data => {
      const { id } = data;
      this.id = id;
      this.quizService.get(id)
        .subscribe(data => {
          this.formQuiz.patchValue(data)
        })
    })
  }
  editQuiz() {
    this.ActivatedRouter.params.subscribe(data => {
      const { id } = data;
      this.id_q = id;
      this.quizService.editQuiz(this.formQuiz.value, this.id_q)
        .subscribe(data => {
          this.router.navigate(['/cp-admin/quiz/' + this.id]);
        })
    })

  }
}
