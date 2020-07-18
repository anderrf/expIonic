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
  private answer:string;

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

  setValues()
  {
    if((this.valA == 0) && (this.valB == 0) && (this.valC == 0))
    {
      this.isInvalid();
    }
    else if(this.valA == 0)
    {
      this.aIsZero(this.valB, this.valC);
    }
    else if(this.valB == 0)
    {
      this.bIsZero(this.valA, this.valC);
    }
    else if(this.valC == 0)
    {
      this.cIsZero(this.valA, this.valB);
    }
    else
    {
      this.calculateDelta(this.valA, this.valB, this.valC);
    }
  }

  aIsZero(b:number, c:number)
  {
    this.res1 = (-c)/b;
    this.answer = "Equação de 1º grau. S = {"+this.res1+"}";
  }

  bIsZero(a:number, c:number)
  {
    this.res1 = (-c)/a;
    this.res2 = (-c)/a;
    this.answer = "S = {√"+this.res1+"; -√"+this.res2+"}";
  }

  cIsZero(a:number, b:number)
  {
    this.res1 = 0;
    this.res2 = (-b)/a;
    this.answer = "S = {"+this.res1+"; "+this.res2+"}";
  }

  calculateDelta(a:number, b:number, c:number)
  {
    this.delta = (b*b)-(4*a*c);
    if(this.delta < 0)
    {
      this.isInvalid();
    }
    else if(this.delta == 0)
    {
      this.deltaIsZero(a, b);
    }
    else
    {
      this.deltaIsPositive(a, b, this.delta);
    }
  }

  isInvalid()
  {
    this.answer = "Não é possível encontrar resultado.";
  }

  deltaIsZero(a:number, b:number)
  {
    this.res1 = (-b)/(2*a);
    this.answer = "S = {"+this.res1+"}";
  }

  deltaIsPositive(a:number, b:number, delta:number)
  {
    this.res1 = ((-b) + Math.sqrt(delta))/(2*a);
    this.res2 = ((-b) - Math.sqrt(delta))/(2*a);
    this.answer = "S = {"+this.res1+"; "+this.res2+"}";
  }

}
