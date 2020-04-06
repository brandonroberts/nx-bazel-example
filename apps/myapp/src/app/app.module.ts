import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MyLibModule } from '@nxbazel/my-lib';
import { NgLibModule } from '@nxbazel/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}, {}),
    MyLibModule,
    NgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
