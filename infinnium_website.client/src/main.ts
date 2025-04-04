import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './routing/routes';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),],
}).catch(err => console.error(err));