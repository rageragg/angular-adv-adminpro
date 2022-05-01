import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: [
  ]
})
export class Graphics1Component implements OnInit {

  private date = new Date();

  private _graphSales = {
    title: 'Ventas del Dia: ' + this.date.toDateString(),
    labels: ['Totales', 'Cobradas', 'Transito'],
    data: [130, 85, 130-85],
    colors: ['#85b5bc', '#5cb85c', '#d9534f']
  }

  private _graphInventory = {
    title: 'Inventario del Dia: ' + this.date.toDateString(),
    labels: ['A', 'B', 'C', 'D', 'E'],
    data: [23, 85, 14, 55, 96],
    colors: ['#85b5bc', '#5cb85c', '#d9534f', '#1ce625', '#99e6c3' ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get graphSales() {
    return {...this._graphSales};
  }

  get graphInventory() {
    return {...this._graphInventory};
  }

}
