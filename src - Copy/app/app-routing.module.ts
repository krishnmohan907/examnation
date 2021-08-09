import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { TestCasesComponent } from './test-cases/test-cases.component';
import { PersoncomponentComponent } from './personcomponent/personcomponent.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'person',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employee',
    component: EmployeeViewComponent
  },
  {
    path: 'Reactive',
    component: ReactiveformComponent
  },
  {
    path: 'cource',
    component: CourceListComponent
  },
  {
    path: 'exam',
    component: ExamPaperComponent
  },
  {
    path: 'Test',
    component: TestCasesComponent
  },
  {
    path: 'person',
    component: PersoncomponentComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
