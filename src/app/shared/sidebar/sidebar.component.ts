import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isShowHiddenBar = false;
  @Input() colorToggle = "white";
  @Output() showHiddenBar = new EventEmitter<boolean>;
  @Input() displayTime: 0 | 1 | 2 | 3 | 4 | 5 = 3;
  @Output() showMainContent = new EventEmitter<boolean>;
  constructor() {
  }
  ngOnInit() {
    this.showHiddenBar.emit(this.isShowHiddenBar);
  }

  public toggle(event:any){
    this.isShowHiddenBar = event;
    this.showHiddenBar.emit(event);
  }
}
