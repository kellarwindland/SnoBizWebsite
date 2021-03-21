import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: 'menu-page', component: MenuPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'application-page', component: ApplicationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
