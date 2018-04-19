import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello-cmp',
  template: `<div>Hello, {{name}} !!</div>`,
  styles: [`div { color: red; }`],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent {
  @Input() name = 'World';
}
