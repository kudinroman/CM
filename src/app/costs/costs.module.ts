import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostsComponent } from './costs.component';
import { CostEditComponent } from './cost-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CostsComponent,
    CostEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'costs', component: CostsComponent},
{path: 'costs/:id/edit', component: CostEditComponent},
    ])
  ]
})
export class CostsModule { }
