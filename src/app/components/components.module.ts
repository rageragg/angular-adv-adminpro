import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VariatorComponent } from './variator/variator.component';

@NgModule({
  declarations: [
    VariatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VariatorComponent
  ]
})
export class ComponentsModule { }
