import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CategoryTreeData } from 'src/app/models/categories';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.scss']
})
export class MatMenuComponent {
  @Input() isRootNode: boolean;
  @Input() data: CategoryTreeData[];
  @Input() triggerName: string;

  constructor() { 
    this.isRootNode = false;
    this.data = [];
    this.triggerName = 'Nested Menu';
  }
}
