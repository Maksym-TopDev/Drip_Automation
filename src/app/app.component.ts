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
  createNewYesBranch: boolean = false;
  createNewNoBranch: boolean = false;
  triggerValue: string = '';
  steps = [];

 
  openNewStepModal() {
    this.createNewStep = !this.createNewStep;
  }

  openNewYesBranch(step) {
    this.createNewNoBranch = false;
    this.createNewYesBranch = !this.createNewYesBranch;
  }

  openNewNoBranch(step) {
    this.createNewYesBranch = false;
    this.createNewNoBranch = !this.createNewNoBranch;
  }
 
  addDelayStep() {
    this.steps.push({type: 'delay', settings: {delay: ''}});
    this.createNewStep = !this.createNewStep;
  }

  addEmailStep() {
    this.steps.push({type: 'email', settings: {emailName: 'Email Name', subject: '', fromName: '', fromAddress: '', sequence: 0}});
    this.createNewStep = !this.createNewStep;
  }

  addConditionStep() {
    this.steps.push({type: 'condition', settings: {conditionName: 'Condition Name', rule: ''}, branches:[]});
    this.createNewStep = !this.createNewStep;
  }

  addDelayStepNoBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'delay', settings: {delay: ''}});
    this.createNewNoBranch = !this.createNewNoBranch;
  }

  addEmailStepNoBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'email', settings: {emailName: 'Email Name', subject: '', fromName: '', fromAddress: '', sequence: 0}});
    this.createNewNoBranch = !this.createNewNoBranch;
  }

  addConditionStepNoBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'condition', settings: {conditionName: 'Condition Name', rule: ''}, branches:[]});
    this.createNewNoBranch = !this.createNewNoBranch;
  }

  addDelayStepYesBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'delay', settings: {delay: ''}});
    this.createNewYesBranch = !this.createNewYesBranch;
  }

  addEmailStepYesBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'email', settings: {emailName: 'Email Name', subject: '', fromName: '', fromAddress: '', sequence: 0}});
    this.createNewYesBranch = !this.createNewYesBranch;
  }

  addConditionStepYesBranch() {
    this.steps[this.steps.length -1].branches.push({type: 'condition', settings: {conditionName: 'Condition Name', rule: ''}, branches:[]});
    this.createNewYesBranch = !this.createNewYesBranch;
  }

  openSettings(step) {
    this.editStep = true;
    this.selectedStep = step;
  }

  hideSettings() {
    this.editStep = false;
  }



}
