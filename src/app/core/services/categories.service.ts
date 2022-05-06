import { Injectable } from '@angular/core';
import { from, Observable, reduce } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { CategoriesByParentId, Category, CategoryTreeData } from 'src/app/models/categories';
import { categories } from './categories.data';

@Injectable()
export class CategoriesService {
  private categories: Category[];

  constructor() { 
    this.categories = categories;
  }

  private get GroupCategoriesByParentId() {
    return this.categories.reduce((groupByParentId: CategoriesByParentId, category: Category) => {
      const parentId = category.parentId || 0;
      groupByParentId[parentId] = groupByParentId[parentId] || [];
      groupByParentId[parentId].push(category);
      return groupByParentId;
    }, {});
    
  }

  private get CategoryTree(): CategoryTreeData[] {
    const groupCategoriesByParentId = this.GroupCategoriesByParentId;
    Object.keys(groupCategoriesByParentId).map((parendId: string) => {
      groupCategoriesByParentId[Number(parendId)].map((category: CategoryTreeData) => {
        groupCategoriesByParentId[category.id] ? category.children = groupCategoriesByParentId[category.id] : ''
      });
    });
    return groupCategoriesByParentId[0];
  }

  get CategoriesTree() {
    return of(this.CategoryTree);
  }
}
