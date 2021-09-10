import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { ChildComponent } from './components/child/child.component';
import { CompanyComponent } from './components/company/company.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: 'user/:id', component: UserComponent , 
    children: [
      { path: '',redirectTo: "address", pathMatch: 'full'},
      { path: 'address', component: AddressComponent},
      { path: 'company', component: CompanyComponent }
    ]
  },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
