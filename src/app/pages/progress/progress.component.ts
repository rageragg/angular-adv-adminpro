import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent implements OnInit {

  progress: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  get getProgress() {
    return `${this.progress}%`;
  }

  changeProgress( value: number ) {
    this.progress = value;
  }

}
