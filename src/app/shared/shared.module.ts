import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TextFadeRandomComponent } from "./components/text-fade-random/text-fade-random.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CursorDotComponent } from './cursor-dot/cursor-dot.component';
import { DiaryLayoutComponent } from './theme/diary-layout/diary-layout.component';

@NgModule({
  declarations: [
    TextFadeRandomComponent,
    SidebarComponent,
    CursorDotComponent,
    DiaryLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TextFadeRandomComponent,
    SidebarComponent,
    CursorDotComponent
  ],
  providers: [],
})
export class SharedModule {}
