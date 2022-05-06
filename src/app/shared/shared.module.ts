import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule
  ]
})
export class SharedModule { }
