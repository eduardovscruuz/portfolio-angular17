import { Routes } from '@angular/router';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: ContentHomeComponent,
  },
  {
    path: 'about',
    component: ContentAboutComponent,
  },
];
