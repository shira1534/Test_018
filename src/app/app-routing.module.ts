import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodactComponent } from './addprodact/addprodact.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatingComponent } from './updating/updating.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"app-addprodact",component:AddprodactComponent},
{ path: 'filter', component: FilterComponent },
{ path: "updating/:id", component: UpdatingComponent },
{path:"",component:HomeComponent},
{path:"**",component:HomeComponent}

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
