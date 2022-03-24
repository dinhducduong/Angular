import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  id: number = 0;
  quiz: Array<any> = [];
  arr: Array<any> = [];

  constructor(private router: ActivatedRoute, private QuestionServices: QuestionService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = Number(data['id']);
      this.QuestionServices.listQuestion(data['id']).subscribe(data => {
        this.arr = data
        while (this.arr.length < 20) {
          let rand = Math.floor(Math.random() * 10);
          if (!this.arr.includes(rand)) {
            console.log(rand);

          }
        }

      })
    })
  }

}
