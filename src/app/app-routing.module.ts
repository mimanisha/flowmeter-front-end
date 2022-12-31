import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ConfigComponent } from './pages/config/config.component';
import { Device79Component } from './pages/device79/device79.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'mainpage',component:MainpageComponent, children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'79',component:Device79Component},
    {path:'**',redirectTo:'dashboard'}
  ]},
  {path:'report',component:ReportComponent},
  {path:'config',component:ConfigComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
