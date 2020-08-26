import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config/config.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:buscar', component: HomeComponent },
  { path: 'config', component: ConfigComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
