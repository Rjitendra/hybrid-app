import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';



// Bootstrap Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    const upgrade = ref.injector.get(UpgradeModule);
   // upgrade.bootstrap(document.body, ['legacyApp']);
  });

