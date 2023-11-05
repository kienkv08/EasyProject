import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryRoutingModule } from './diary-routing.module';
import { MyDiaryComponent } from './my-diary/my-diary.component';



@NgModule({
  declarations: [
    MyDiaryComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
