import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColumnComponent } from './components/column/column.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ColumnComponent,
    ContentHomeComponent,
    ContentAboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
}
