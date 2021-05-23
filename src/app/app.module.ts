import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultComponent } from './git-result/git-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
