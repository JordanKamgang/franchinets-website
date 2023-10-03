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
import { MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { TranslationPipe } from './pipe/translationsPipe';

@NgModule({
  declarations: [
    AppComponent,
    FooPageComponent,
    HomePageComponent,
    MenuBarComponent,
    PageHeaderComponent,
    TranslationPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
