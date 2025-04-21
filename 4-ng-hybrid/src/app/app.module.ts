import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularJsWrapperComponent } from './product-list-wrapper.component';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';

import { CommonModule } from '@angular/common';
import angular from 'angular';

@NgModule({
  declarations: [AppComponent, AngularJsWrapperComponent],
  imports: [BrowserModule, CommonModule, UpgradeModule],
  providers: [{ provide: '$scope', useExisting: '$rootScope' }], // REQUIRED
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  async ngDoBootstrap(appRef: ApplicationRef) {
    // 1. Set AngularJS global reference
    setAngularJSGlobal(angular);

    try {
      // 2. Bootstrap AngularJS with the correct module name
      await this.upgrade.bootstrap(document.body, ['legacyApp'], { strictDi: true });
      console.log('AngularJS module legacyApp bootstrapped');

      // 3. Bootstrap Angular after AngularJS is ready
      appRef.bootstrap(AppComponent);
    } catch (err) {
      console.error('Bootstrap failed:', err);
      throw err;
    }
  }
}
