import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooPageComponent } from './components/foo-page/foo-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    FooPageComponent,
    HomePageComponent,
    MenuBarComponent,
    PageHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
