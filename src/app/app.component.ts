import { Component } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedStep = {type: ''};
  editStep: boolean = false;
  createNewStep: boolean = false;
  steps = [];

 
  openNewStepModal() {
    this.createNewStep = !this.createNewStep;
  }

  addDelayStep() {
    this.steps.push({type: 'delay', settings: {delay: ''}});
    this.createNewStep = !this.createNewStep;
  }

  addEmailStep() {
    this.steps.push({type: 'email', settings: {emailName: 'Email Name', subject: '', fromName: '', fromAddress: ''}});
    this.createNewStep = !this.createNewStep;
  }

  addConditionStep() {
    this.steps.push({type: 'condition', settings: {conditionName: '', rule: ''}});
    this.createNewStep = !this.createNewStep;
  }

  openSettings(step) {
    this.editStep = true;
    this.selectedStep = step;
  }

  hideSettings() {
    this.editStep = false;
  }



}
