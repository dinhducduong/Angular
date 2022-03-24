import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  listQuiz(id: any): Observable<any> {
    return this.http.get<any>(`${environment.quiz_api}?code_id=${id}`);
  }

}
