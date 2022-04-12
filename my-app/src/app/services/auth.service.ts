import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: String, googleId: String, name: string, avatar: string): Observable<any> {
    return this.http.get<any>(`${environment.user_api}?email=${email}&googleId=${googleId}`)
      .pipe(
        map((item) => {
          if (item.length > 0) {
            localStorage.setItem("user", JSON.stringify(item[0]));
            if (item[0].roles == 2) {
              this.router.navigate(['/cp-admin']);
            } else {
              this.router.navigate(['/']);
            }
            return item[0];
          } else {
            return this.http.post<any>(`${environment.user_api}`, {
              "name": name,
              "email": email,
              "googleId": googleId,
              "avatar": avatar,
              "roles": 1,
            }).subscribe(data => {
              localStorage.setItem("user", JSON.stringify({
                "name": name,
                "email": email,
                "googleId": googleId,
                "avatar": avatar,
                "roles": 1
              }));
              this.router.navigate(['/'])
            })
          }

        })

      )
  }
  getUser() {
    return this.http.get<any>(`${environment.user_api}`).pipe(
      map((item) => {
        localStorage.setItem('user', JSON.stringify(item[0]));
        this.router.navigate(['/']);
        return item[0];

      })

    );
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  addHistory(data: any): Observable<any> {
    return this.http.post<any>(`${environment.history_api}`, data);
  }

  updateHistory(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.history_api}/${id}`, data);
  }
  getHistorys(data: any) {
    return this.http.get<any>(`${environment.history_api}?id_user=${data}`);
  }
  listUser(): Observable<any> {
    return this.http.get<any>(`${environment.user_api}`);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${environment.user_api}/${id}`);
  }
  editUser(data: any, id: any): Observable<any> {
    return this.http.put<any>(`${environment.user_api}/${id}`, data);
  }

}
