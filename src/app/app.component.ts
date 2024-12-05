import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColumnComponent } from './components/column/column.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColumnComponent, CommonModule],
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

  revealHome(): void {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
  }
  revealAbout(): void {
    this.isHomeActive = false;
    this.isAboutActive = true;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = false;
  }
  revealSkills(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = true;
    this.isProjectsActive = false;
    this.isContactActive = false;
  }
  revealProjects(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = true;
    this.isContactActive = false;
  }
  revealContact(): void {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactActive = true;
  }
}
