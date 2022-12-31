import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';
import { GoogleMapsModule } from '@angular/google-maps';

// import { NgApexchartsModule} from 'apexcharts';


import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GuageComponent } from './guage/guage.component';
import { MapComponent } from './map/map.component';
import { Device79Component } from './pages/device79/device79.component';
import { ReportComponent } from './pages/report/report.component';
import { ConfigComponent } from './pages/config/config.component';
import { DailyreportComponent } from './pages/dailyreport/dailyreport.component';
import { MonthlyreportComponent } from './pages/monthlyreport/monthlyreport.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    MainpageComponent,
    GuageComponent,
    MapComponent,
    Device79Component,
    ReportComponent,
    ConfigComponent,
    DailyreportComponent,
    MonthlyreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    GoogleMapsModule,
    CommonModule ,
    HttpClientModule,
    HttpClientJsonpModule,
    // NgApexchartsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
