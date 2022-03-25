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
import { RandomquetionsPipe } from './untils/randomquetions.pipe';
import { StudentComponent } from './screens/admin/student/student.component';
import { AddSubjectComponent } from './screens/admin/dashboard/add-subject/add-subject.component';
import { EditSubjectComponent } from './screens/admin/dashboard/edit-subject/edit-subject.component';
import { AddQuizComponent } from './screens/admin/list-quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './screens/admin/list-quiz/edit-quiz/edit-quiz.component';
import { ListQuestionComponent } from './screens/admin/list-question/list-question.component';
import { AddQuestionComponent } from './screens/admin/list-question/add-question/add-question.component';
import { EditQuestionComponent } from './screens/admin/list-question/edit-question/edit-question.component';
import { AddStudentComponent } from './screens/admin/student/add-student/add-student.component';
import { EditStudentComponent } from './screens/admin/student/edit-student/edit-student.component';
import { HistoryComponent } from './screens/client/history/history.component';

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
    ListQuizComponent,
    RandomquetionsPipe,
    StudentComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    AddQuizComponent,
    EditQuizComponent,
    ListQuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    AddStudentComponent,
    EditStudentComponent,
    HistoryComponent
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
