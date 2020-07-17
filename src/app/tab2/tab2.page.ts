import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private date:Date;

  constructor()
  {
    this.setToday();
  }

  setToday()
  {
    this.date = new Date();
  }

  addDays(day:number)
  {
    this.date.setDate(this.date.getDate() + day);
  }

  getDate():string
  {
    return (this.date.getDate()+"/"+((this.date.getMonth()+1) < 10 ? "0"+(this.date.getMonth()+1):(this.date.getMonth()+1))+"/"+this.date.getFullYear()).toString();
  }

}
