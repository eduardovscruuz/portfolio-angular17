import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ColumnsComponent } from './components/columns/columns.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent, ColumnsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular17';

  colorHome: string = '#61e4d5';
  colorAbout: string = '#57d5e0';
  colorSkills: string = '#4dc5ea';
  colorProjects: string = '#43b5f5';
  colorContact: string = '#38a5ff';

  isHomeActive = true; // Inicialmente ativa a coluna "home"
  isAboutActive = false;
  isSkillsActive = false;
  isProjectsActive = false;
  isContactActive = false;
  pageName: string = 'home';

  revealHome(): void {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.pageName = 'home';
  }
  revealAbout(): void {
    this.isHomeActive = false;
    this.isAboutActive = true;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.pageName = 'about';
  }
  revealSkills(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = true;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.pageName = 'skills';
  }
  revealProjects(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = true;
    this.isContactActive = false;
    this.pageName = 'projects';
  }
  revealContact(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = true;
    this.pageName = 'contact';
  }
}
