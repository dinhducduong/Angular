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
  getQuiz(id: any): Observable<any> {
    return this.http.get<any>(`${environment.subject_api}?Code=${id}`);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${environment.quiz_api}/${id}`);
  }

  AddQuizs(data: any): Observable<any> {
    return this.http.post<any>(`${environment.quiz_api}`, data);
  }
  editQuiz(data: any, id: any): Observable<any> {
    return this.http.put<any>(`${environment.quiz_api}/${id}`, data);
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.quiz_api}/${id}`);
  }
}
