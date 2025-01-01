import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `<p>Hello World!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
