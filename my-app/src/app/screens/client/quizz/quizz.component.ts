import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/quiz.service';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  id: number = 0;
  quiz: Array<any> = [];
  constructor(private router: ActivatedRoute, private QuizServices: QuizService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = Number(data['id']);
      this.QuizServices.listQuiz(data['id']).subscribe(data => {
        this.quiz = data
        console.log(data);

      })
    })
  }

}
