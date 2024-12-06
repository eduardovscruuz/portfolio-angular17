import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColumnComponent } from './components/column/column.component';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ColumnComponent, ContentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
  isHomeActive = true; // Inicialmente ativa a coluna "home"
  isAboutActive = false;
  isSkillsActive = false;
  isProjectsActive = false;
  isContactActive = false;
  activeColumn: string = 'home';

  revealHome(): void {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.activeColumn = 'home';
  }
  revealAbout(): void {
    this.isHomeActive = false;
    this.isAboutActive = true;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.activeColumn = 'about';
  }
  revealSkills(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = true;
    this.isProjectsActive = false;
    this.isContactActive = false;
    this.activeColumn = 'skills';
  }
  revealProjects(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = true;
    this.isContactActive = false;
    this.activeColumn = 'projects';
  }
  revealContact(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = true;
    this.activeColumn = 'contact';
  }
}
