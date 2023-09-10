import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PanelComponent } from './components/panel/panel.component';
import { BreakingEncapsulationComponent } from './components/breaking-encapsulation/breaking-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    BreakingEncapsulationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
