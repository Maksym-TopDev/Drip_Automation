import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
