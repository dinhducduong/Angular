import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  id: number = 0;
  id_q: number = 0;
  question: Array<any> = [];
  user_select_answers: Array<any> = [];

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router, private QuestionServices: QuestionService, private authServices: AuthService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.id = Number(data['id']);

      this.QuestionServices.listQuestion(data['id']).subscribe(data => {
        let arr = <any>data;
        arr.sort(() => Math.random() - 0.5);
        let selected = arr.slice(0, 10);
        this.question = selected;

      })
    });
    this.ActivatedRoute.params.subscribe(data => {
      this.id_q = Number(data['id_q']);
      const id_q = data['id'];
    })

  }

  select_answer(qId: number, aId: number) {
    let indx = -1;
    this.user_select_answers.forEach((el, index) => {
      if (el.qId == qId) {
        indx = index;
        return;
      }
    });
    if (indx == -1) {
      this.user_select_answers.push({
        qId, aId
      });
    } else {
      this.user_select_answers[indx].aId = aId;
    }
  }
  SubmitEx() {
    let correctAns = 0;
    this.user_select_answers.forEach((el) => {
      let q = this.question.find(item => item.id == el.qId);
      if (q.AnswerId == el.aId) {
        correctAns++;
      }
    })
    const score = (correctAns * 10 / this.question.length).toFixed(2);
    const loggedInUsers = JSON.parse(localStorage.getItem('user') || "{}");
    this.ActivatedRoute.params.subscribe(data => {

      this.id_q = Number(data['id_q']);
      this.QuestionServices.get(data['id_q']).subscribe(data => {
        console.log(data[0]['id']);
        this.authServices.updateHistory(data[0]['id'], {
          id_user: loggedInUsers.googleId,
          email: loggedInUsers.email,
          score: score,
          Idquiz: this.id_q,
          createdAt: data[0]['createdAt'],
          updateAt: Date()

        }).subscribe(data => {
          this.router.navigate(['/history']);

        })
      })
    })



  }
}
