import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectServices {

  constructor(private http: HttpClient) { }
  listSubjects(): Observable<any> {
    return this.http.get<any>(`${environment.subject_api}`);
  }
  remove(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.subject_api}/${id}`);
  }
}
