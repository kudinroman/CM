import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostsModule } from './costs/costs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', redirectTo: 'costs', pathMatch: 'full' },
      { path: '', redirectTo: '/costs', pathMatch: 'full' },
      { path: '**', redirectTo: '/costs', pathMatch: 'full' },
    ]),
    CostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
