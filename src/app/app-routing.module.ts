import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { ChildComponent } from './components/child/child.component';
import { CompanyComponent } from './components/company/company.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationComponent } from './components/location/location.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'user/:id', component: UserComponent , 
    children: [
      { path: '',redirectTo: "address", pathMatch: 'full'},
      { path: 'address', component: AddressComponent},
      { path: 'company', component: CompanyComponent }
    ]
  },
  { path: 'about', component: AboutComponent,
    children:[
      {path: "location",outlet: "map", component: LocationComponent},
      {path: "feedback",outlet: "feed", component: FeedbackComponent }
    ]
  },
  { path: 'header', component: HeaderComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
