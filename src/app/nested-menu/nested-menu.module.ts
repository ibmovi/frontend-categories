import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedMenuRoutingModule } from './nested-menu-routing.module';
import { NestedMenuComponent } from './nested-menu.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuComponent } from './mat-menu/mat-menu.component';


@NgModule({
  declarations: [
    NestedMenuComponent,
    MatMenuComponent
  ],
  imports: [
    CommonModule,
    NestedMenuRoutingModule,
    SharedModule
  ]
})
export class NestedMenuModule { }
