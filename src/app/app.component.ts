import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>@angular/elements</h3>

    <hello-cmp name="Component"></hello-cmp>
    <hello-element name="Element"></hello-element>
  `
})
export class AppComponent {}
