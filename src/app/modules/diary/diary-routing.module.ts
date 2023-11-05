import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDiaryComponent } from './my-diary/my-diary.component';

const routes: Routes = [
  {path: '', component: MyDiaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
