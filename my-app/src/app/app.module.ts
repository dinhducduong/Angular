import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './screens/client/home-layout/home-layout.component';
import { HomeComponent } from './screens/client/home/home.component';
import { QuizzComponent } from './screens/client/quizz/quizz.component';
import { QuestionComponent } from './screens/client/question/question.component';
import { DashboardLayoutComponent } from './screens/admin/dashboard-layout/dashboard-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { ListQuizComponent } from './screens/admin/list-quiz/list-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomeComponent,
    QuizzComponent,
    QuestionComponent,
    DashboardLayoutComponent,
    LoginComponent,
    DashboardComponent,
    ListQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
