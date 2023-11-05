import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isShowSideBar = false;

  showSidebar(event:any){
    this.isShowSideBar = event;
  }

  showMainContent(event:any){
    this.isShowSideBar = event;
  }
}
