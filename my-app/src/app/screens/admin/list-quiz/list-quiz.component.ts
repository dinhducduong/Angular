import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  id: number = 0;
  quiz: Array<any> = [];
  constructor(private router: ActivatedRoute, private QuizServices: QuizService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = Number(data['id']);
      this.QuizServices.listQuiz(data['id']).subscribe(data => {
        this.quiz = data

      })
    })
  }
}
