import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaDeComponent } from './acerca-de.component';

const routes: Routes = [{ path: '', component: AcercaDeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaDeRoutingModule { }
