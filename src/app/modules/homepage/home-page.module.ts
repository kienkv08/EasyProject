import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HabitsComponent } from './habits/habits.component';
import { LearningComponent } from './learning/learning.component';
import { SkillComponent } from './skill/skill.component';
import { TechnicalsComponent } from './technicals/technicals.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeadersComponent } from './headers/headers.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TextFadeRandomComponent } from 'src/app/shared/components/text-fade-random/text-fade-random.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    HomePageComponent,
    IntroductionComponent,
    HabitsComponent,
    LearningComponent,
    SkillComponent,
    TechnicalsComponent,
    ProjectsComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    IntroductionComponent,
    HabitsComponent,
    LearningComponent,
    SkillComponent,
    TechnicalsComponent,
    ProjectsComponent,
  ],
  providers: [],
})
export class HomePageModule {}
