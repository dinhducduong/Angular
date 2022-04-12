import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private authServices: AuthService, private quizService: QuizService) { }
  email: string = "";
  historys: Array<any> = [];
  quiz: Array<any> = [];
  ngOnInit(): void {
    const email = JSON.parse(localStorage.getItem('user') || "{}");
    this.authServices.getHistorys(email.googleId).subscribe(data => {
      this.historys = data

    })
  }

}
