import {Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cursor-dot',
  templateUrl: './cursor-dot.component.html',
  styleUrls: ['./cursor-dot.component.scss']
})
export class CursorDotComponent {
  @ViewChild('cursor') refCursor: any;
  constructor() {
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.refCursor.nativeElement.style.left = event.pageX - 15 + 'px';
    this.refCursor.nativeElement.style.top = event.pageY - 15 + 'px';
  }
}
