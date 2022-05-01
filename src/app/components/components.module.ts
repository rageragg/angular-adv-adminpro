import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule  } from "ng2-charts";

import { VariatorComponent } from './variator/variator.component';
import { GdoughnutComponent } from './gdoughnut/gdoughnut.component';

@NgModule({
  declarations: [
    VariatorComponent,
    GdoughnutComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule
  ],
  exports: [
    VariatorComponent,
    GdoughnutComponent
  ]
})
export class ComponentsModule { }
