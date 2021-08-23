import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversalComponent } from './universal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent ,
    // children:[
    //   {path:'login/:token', component: LoginComponent},
    //   {path:'login', component:LoginComponent},
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
