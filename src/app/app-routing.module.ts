import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryLayoutComponent} from "./shared/theme/diary-layout/diary-layout.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/homepage/home-page.module').then(m=>m.HomePageModule)
  },
  {
    path: 'my-diary',
    component: DiaryLayoutComponent,
    loadChildren: () => import('../app/modules/diary/diary.module').then(m=>m.DiaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
