import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppRoutingModule { }
