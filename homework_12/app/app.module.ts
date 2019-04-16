import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './dumb.component';
import { SmartComponent } from './smart.component';
import { IsInvisibleDirective } from './is-invisible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent,
    IsInvisibleDirective,
    MakeBiggerDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
