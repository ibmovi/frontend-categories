import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './services/categories.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CategoriesService]
})
export class CoreModule { }
