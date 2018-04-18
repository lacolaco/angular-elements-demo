import { HelloComponent } from './app/hello.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createCustomElement } from '@angular/elements';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    const HelloElement = createCustomElement(HelloComponent, {
      injector: ref.injector
    });

    window.customElements.define('hello-element', HelloElement);
  })
  .catch(err => console.log(err));
