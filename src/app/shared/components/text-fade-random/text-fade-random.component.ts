import { Component, Input } from '@angular/core';
import { LOGO } from 'src/utils/constant';

@Component({
  selector: 'app-text-fade-random',
  templateUrl: './text-fade-random.component.html',
  styleUrls: ['./text-fade-random.component.scss']
})
export class TextFadeRandomComponent {
  @Input() text = LOGO;
  @Input() color = 'red';
}
