import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private form:FormGroup;
  private valA:number;
  private valB:number;
  private valC:number;
  private delta:number;
  private res1:number;
  private res2:number;
  private answer:string = "adads";

  constructor(private fb:FormBuilder) 
  {
    this.form = this.fb.group({
      valA: ['', Validators.compose([
        Validators.required
      ])],
      valB: ['', Validators.compose([
        Validators.required
      ])],
      valC: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  get getAnswer():string
  {
    return this.answer;
  }

}
