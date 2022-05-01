import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-gdoughnut',
  templateUrl: './gdoughnut.component.html',
  styleUrls: ['./gdoughnut.component.css']
})
export class GdoughnutComponent implements OnInit {

  @Input()  title: string = 'Grafica';
  @Input()  labels: string[] = ['Label1', 'label2', 'label3'];
  @Input()  data: number[] = [10,20,30];
  @Input()  bgcolors: string[] = [ '#85b5bc', '#5cb85c', '#d9534f' ];

  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.bgcolors
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.bgcolors
        },
      ]
    };
  }

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
