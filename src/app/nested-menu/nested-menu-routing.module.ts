import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedMenuComponent } from './nested-menu.component';

const routes: Routes = [{ path: '', component: NestedMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedMenuRoutingModule { }
