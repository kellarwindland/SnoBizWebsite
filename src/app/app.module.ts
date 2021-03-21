import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentViewComponent,
    FooterComponent,
    HomePageComponent,
    EventPageComponent,
    MenuPageComponent,
    ContactPageComponent,
    ApplicationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
