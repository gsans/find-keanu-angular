import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Auth from '@aws-amplify/auth';
import Predictions, { AmazonAIPredictionsProvider, InterpretTextCategories } from '@aws-amplify/predictions';
import amplify from './aws-exports';

Auth.configure(amplify);
Predictions.configure(amplify);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
