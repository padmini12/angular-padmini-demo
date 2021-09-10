import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from './components/parent/parent.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './services/users.service';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    AgePipe,
    UserComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
