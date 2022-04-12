import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  Text: Array<any> = [];
  id: Array<any> = [];
  selectIdAnswer: any;
  getAnswer: any;
  formhtml: Array<any> = [];
  idAnswer: any;
  correct: any;

  constructor(private addQues: QuestionService, private router: Router, private ActivatedRouter: ActivatedRoute) { }
  formQues: FormGroup = new FormGroup({
    Text: new FormControl(''),
    AnswerId: new FormControl(''),
    Answers: new FormControl([

    ])
  })
  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe(res => {
      this.addQues.getQues(res['id_sub'], res['id'])
        .subscribe(value => {
          this.formQues.patchValue(value);
          this.getAnswer = value.Answers;
          this.correct = value.AnswerId;
        })
    })
  }
  selectAnswer(idAnswer: number) {
    this.idAnswer = idAnswer;
    this.formQues.value.AnswerId = this.idAnswer;
  }

  editQuestion() {
    let indx = -1;
    this.formQues.value.Answers.forEach((el: any, index: any) => {
      if (el.Text == this.id[index]) {
        indx = index;
      }
    })
    for (let i = 0; i < this.formhtml.length; i++) {
      this.formQues.value.Answers[indx].Text = this.Text[i];
      this.formQues.value.AnswerId = this.id[i];
    }
    this.ActivatedRouter.params.subscribe(value => {
      this.addQues.editQues(value['id_sub'], value['id'], this.formQues.value)
        .subscribe(res => {
          this.router.navigate(['cp-admin/quiz/' + value['id_sub'] + '/question'])
        })
    })
  }
}
