import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TextFadeRandomComponent } from "./components/text-fade-random/text-fade-random.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    TextFadeRandomComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TextFadeRandomComponent
  ],
  providers: [],
})
export class SharedModule {}
