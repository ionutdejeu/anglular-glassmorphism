import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from '../pages/work/work.component';
import { DiscoverComponent } from '../pages/discover/discover.component';
import { AppsComponent } from '../pages/apps/apps.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',component:AppsComponent},
  { path: 'apps', component:AppsComponent},
  { path: 'work', component: WorkComponent },
  { path: 'discover', component: DiscoverComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
