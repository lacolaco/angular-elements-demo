import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-cmp',
  template: `<div>Hello, {{name}} !!</div>`,
  styles: [`div { color: red; }`]
})
export class HelloComponent {
  @Input() name = 'World';
}
