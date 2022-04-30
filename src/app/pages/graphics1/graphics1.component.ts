import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: [
  ]
})
export class Graphics1Component implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Ventas',
    'Por Cobrar',
    'Inventario'
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [ 679, 450, 980 ],
        backgroundColor: [ '#85b5bc', '#5cb85c', '#d9534f' ]
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
