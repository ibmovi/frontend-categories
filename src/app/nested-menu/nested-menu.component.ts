import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../core/services/categories.service';
import { CategoryTreeData } from '../models/categories';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent {
  categories$: Observable<CategoryTreeData[]>;

  constructor(categoriesService: CategoriesService) {
    this.categories$ = categoriesService.CategoriesTree;
   }
}
