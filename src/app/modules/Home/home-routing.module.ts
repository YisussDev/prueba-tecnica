import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffetimeComponent } from './pages/coffetime/coffetime.component';

const routes: Routes = [
  {
    path: '', component: CoffetimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
