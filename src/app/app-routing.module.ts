import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ContainerDisplayComponent } from './container-display/container-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
  { path: 'dates', component: DateSelectorComponent},
  { path: 'planner', component: ContainerDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
