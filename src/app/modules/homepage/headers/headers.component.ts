import { LOGO } from './../../../../utils/constant';
import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent {
  isShowHiddenBar = false;
  constructor(){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.displayLogo();
    }, 3000);

  }
  ngAfterViewInit(): void {

  }
  @ViewChild('cursor') refCursor: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.refCursor.nativeElement.style.left = event.pageX - 15 + 'px';
    this.refCursor.nativeElement.style.top = event.pageY - 15 + 'px';
  }

  @ViewChild('textSlow') textSlow: any;

  /**
   * Make word of text align slowly. Ex: K --0.05s -> KE...
   * @param currentCharIndex index of text
   */
  private displayLogo(currentCharIndex = 0) {
    const logo = LOGO;
    if (currentCharIndex < logo.length) {
      if (this.textSlow.nativeElement){
        this.textSlow.nativeElement.innerText += logo[currentCharIndex];
      }
      setTimeout(() => {
        this.displayLogo(++currentCharIndex);
      }, 50);
    }
  }

  // Don't need use this for current
  //@ViewChild('textBlink') textBlink: any;

  // private handleTextBlink() {
  //   const logo = LOGO;
  //   const text-blink = document.getElementById('text-blink');
  //   this.textBlink.nativeElement.innerText += logo;
  // }

  public showHiddenBar(){
    console.log('run');
    this.isShowHiddenBar = !this.isShowHiddenBar;
  }
}
