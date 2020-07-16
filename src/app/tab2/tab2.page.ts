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
    this.date = new Date('DD/MM/YYYY');
  }

  addDays(day:number)
  {
    this.date.setDate(this.date.getDate() + day);
  }

}
