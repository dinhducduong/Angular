import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  listQuestion(id: any): Observable<any> {
    return this.http.get<any>(`${environment.question_api}/${id}`);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${environment.question_api}/historys/?_sort=id&_limit=1&_order=desc`);
  }
  addQues(data: any, id: any): Observable<any> {
    return this.http.post<any>(`${environment.question_api}/${id}`, data);
  }
  editQues(id_sub: any, id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.question_api}/${id_sub}/${id}`, data);
  }
  remove(id_s: any, id: any): Observable<any> {
    return this.http.delete<any>(`${environment.question_api}/${id_s}/${id}`);
  }
  getQues(id: any, id_q: any): Observable<any> {
    return this.http.get<any>(`${environment.question_api}/${id}/${id_q}`);
  }
}

