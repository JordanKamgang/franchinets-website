import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooPageComponent } from './components/foo-page/foo-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooPageComponent,
    HomePageComponent,
    MenuBarComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
