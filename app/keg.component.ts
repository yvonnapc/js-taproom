import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { SellPintComponent } from './sell-pint.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [SellPintComponent],
  template: `
  <div class="container">
    <div
      [class.cheap]="keg.price < 7"
      [class.expensive]="keg.price >= 7">
      <dl>
        <dt>{{ keg.name }}</dt>
        <dd>Brand: {{ keg.brand }}</dd>
        <dd>Price Per Pint: $ {{ keg.price }}</dd>
        <dd>Alcohol Content: {{ keg.alcohol }} %</dd>
        <dd>Pints in Keg: {{ keg.pints }}</dd>
          <sell-pint *ngIf="keg.pints >= 10" [pintSold]="keg"></sell-pint>
      </dl>
    </div>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
