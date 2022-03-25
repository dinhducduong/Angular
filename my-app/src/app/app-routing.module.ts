import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './screens/admin/dashboard-layout/dashboard-layout.component';
import { AddSubjectComponent } from './screens/admin/dashboard/add-subject/add-subject.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { EditSubjectComponent } from './screens/admin/dashboard/edit-subject/edit-subject.component';
import { AddQuestionComponent } from './screens/admin/list-question/add-question/add-question.component';
import { EditQuestionComponent } from './screens/admin/list-question/edit-question/edit-question.component';
import { ListQuestionComponent } from './screens/admin/list-question/list-question.component';
import { AddQuizComponent } from './screens/admin/list-quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './screens/admin/list-quiz/edit-quiz/edit-quiz.component';
import { ListQuizComponent } from './screens/admin/list-quiz/list-quiz.component';
import { AddStudentComponent } from './screens/admin/student/add-student/add-student.component';
import { EditStudentComponent } from './screens/admin/student/edit-student/edit-student.component';
import { StudentComponent } from './screens/admin/student/student.component';
import { HistoryComponent } from './screens/client/history/history.component';
import { HomeLayoutComponent } from './screens/client/home-layout/home-layout.component';
import { HomeComponent } from './screens/client/home/home.component';
import { QuestionComponent } from './screens/client/question/question.component';
import { QuizzComponent } from './screens/client/quizz/quizz.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent

      },
      {
        path: "quiz/:id",
        component: QuizzComponent
      },
      {
        path: "question/:id",
        component: QuestionComponent
      },
      {
        path: "history",
        component: HistoryComponent
      }
    ]
  },
  {
    path: "cp-admin",
    component: DashboardLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "add",
        component: AddSubjectComponent
      },
      {
        path: "edit/:id",
        component: EditSubjectComponent
      },
      //////
      {
        path: "student",
        component: StudentComponent,

      },
      {
        path: "student/add",
        component: AddStudentComponent,

      },
      {
        path: "student/edit/:id",
        component: EditStudentComponent,

      },
      //////////////
      {
        path: "quiz/:id/add",
        component: AddQuizComponent
      },
      {
        path: "quiz/:id/edit",
        component: EditQuizComponent
      },
      {
        path: "quiz/:id",
        component: ListQuizComponent,
      },
      ////
      {
        path: "quiz/:id/question",
        component: ListQuestionComponent
      },
      {
        path: "quiz/:id/question/edit/:id",
        component: EditQuestionComponent
      },
      {
        path: "quiz/:id/question/add",
        component: AddQuestionComponent
      },
      {
        path: "quiz/:id",
        component: ListQuizComponent,
      },
      //////

    ]
  },
  {
    path: "login",
    component: LoginComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
