import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { MovieComponent } from './movie/movie.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'cloud', component: CloudComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'member', component: MemberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
