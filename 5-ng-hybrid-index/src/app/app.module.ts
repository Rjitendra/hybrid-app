import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UpgradeModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    // in below code product-list will load inside angularjs-root element even you declare muliple product-list out side of angularjs-root div
    // if not declare how may times product-list declared in index html that many times it will be load.
    // for that you can use below commented code this.upgrade.bootstrap(document.body, ['legacyApp'], { strictDi: true });
    const element = document.getElementById('angularjs-root');
    if (element) {
      this.upgrade.bootstrap(element, ['legacyApp'], { strictDi: true });
    } else {
      console.error('Element #angularjs-root not found!');
    }
    // this.upgrade.bootstrap(document.body, ['legacyApp'], { strictDi: true });
  }
}
