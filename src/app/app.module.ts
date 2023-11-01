import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanjuComponent } from './sanju/sanju.component';
import { SandyComponent } from './sanju/sandy/sandy.component';

@NgModule({
  declarations: [
    AppComponent,
    SanjuComponent,
    SandyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
