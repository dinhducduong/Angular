import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/quiz.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  id: number = 0;
  quiz: Array<any> = [];
  id_q: number = 0;
  constructor(private ActivatedRoute: ActivatedRoute, private router: ActivatedRoute, private QuizServices: QuizService, private authServices: AuthService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = Number(data['id']);
      this.QuizServices.listQuiz(data['id']).subscribe(data => {
        this.quiz = data

      })
    })

  }
  StartQuiz(item: any) {

    this.authServices.addHistory({
      id_user: '',
      email: '',
      Idquiz: item,
      score: 0,
      createdAt: Date(),
      updateAt: ''

    }).subscribe(data => {

    })
  }

}
