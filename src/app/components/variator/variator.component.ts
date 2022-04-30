import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-variator',
  templateUrl: './variator.component.html',
  styleUrls: ['./variator.component.css']
})
export class VariatorComponent implements OnInit {

  @Input() progress: number = 0;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() resultValue: EventEmitter<number> =  new EventEmitter();

  private _invalidValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeProgressValue( value: number ) {

    if( this.progress >= 100 && value >= 0 ) {
      this.progress = 100;
      this.resultValue.emit(100);
      return;
    }

    if( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      this.resultValue.emit(0);
      return;
    }
    this.progress += value;
    this.resultValue.emit(this.progress);
  }

  changeValue( value: number ) {

    if( value >= 100 ) {
      this.progress = 100;
    } else if( value <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this._invalidValue = (value > 100 || value < 0);
    this.resultValue.emit(this.progress);

  }

  invalidValue(): boolean {
    return this._invalidValue;
  }

}
