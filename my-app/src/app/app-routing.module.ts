import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './screens/admin/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { ListQuizComponent } from './screens/admin/list-quiz/list-quiz.component';
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
      }
    ]
  },
  {
    path: "cp-admin",
    component: DashboardLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "quiz/:id",
        component: ListQuizComponent
      }
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
