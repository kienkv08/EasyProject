import {Component} from '@angular/core';

@Component({
  selector: 'app-diary-layout',
  templateUrl: './diary-layout.component.html',
  styleUrls: ['./diary-layout.component.scss']
})
export class DiaryLayoutComponent {
  isShowSidebar = false;

  constructor() {
  }

  showSideBar(event:any){
    console.log('diary',event)
    this.isShowSidebar = event;
  }

  showMain(event:any){
    console.log('main',event)
    this.isShowSidebar = event;
  }
}
