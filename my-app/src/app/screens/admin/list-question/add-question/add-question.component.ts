import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  formhtml: Array<any> = [];
  selectIdAnswer: any;
  Text: Array<any> = [];
  id: any;
  idAnswer: any;
  input: string = `<div class="input-group mb-3">
  <div class="input-group-prepend">
      <div class="input-group-text">
          <input type="radio" aria-label="Checkbox for following text input" value="{{i+1}}"  name="radio">
      </div>
  </div>
  <input type="text" class="form-control" formControlName="Answer" aria-label="Text input with checkbox">
</div>
  `;
  constructor(private addQues: QuestionService, private router: Router, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  formQues: FormGroup = new FormGroup({
    Text: new FormControl(''),
    AnswerId: new FormControl(''),
    Answers: new FormControl([

    ])
  })
  selectAnswer(idAnswer: number) {
    this.idAnswer = idAnswer;
    this.formQues.value.AnswerId = this.idAnswer;
  }
  addFormQuestion() { this.formhtml.push(this.input); }

  AddQues() {
    this.ActivatedRouter.params.subscribe(data => {
      for (let i = 0; i < 4; i++) {
        this.addQues.addQues(this.formQues.value.Answers.push(
          {
            id: i + 1,
            Text: this.Text[i],
          }
        ), data['id'])
      }
    })
    this.ActivatedRouter.params.subscribe(data => {
      this.addQues.addQues(this.formQues.value, data['id'])
        .subscribe(res => {
          this.router.navigate(['cp-admin/quiz/' + data['id'] + '/question'])
        })
    })

  }
}
