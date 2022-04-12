import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  question: Array<any> = [];
  id: number = 0;

  constructor(private ActivatedRoute: ActivatedRoute, private QuestionServices: QuestionService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.id = Number(data['id']);

      this.QuestionServices.listQuestion(data['id']).subscribe(data => {
        let arr = <any>data;
        // arr.sort(() => Math.random() - 0.5);
        arr.sort(() => Math.random() - 0.5);
        let selected = arr.slice(0, 10);
        this.question = selected;

      })
    });
  }
  remove(item: any) {
    this.ActivatedRoute.params.subscribe(data => {
      this.QuestionServices.remove(data['id'], item).subscribe(data => {
        this.question = this.question.filter(item => item.id != item);
      })
    });

  }
}
