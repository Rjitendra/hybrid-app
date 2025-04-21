import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';



// Bootstrap Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule);
  

