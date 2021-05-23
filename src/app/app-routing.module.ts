import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultComponent } from './git-result/git-result.component';

const routes: Routes = [
  {path: 'gitForm' , component : GitFormComponent },
  {path : 'gitResult', component :GitResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
