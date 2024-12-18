import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  colorHome: string = '#61e4d5';
  colorAbout: string = '#57d5e0';
  colorSkills: string = '#4dc5ea';
  colorProjects: string = '#43b5f5';
  colorContact: string = '#38a5ff';
  @Input() navbarTitle: string = '';

  getColors() {
    switch (this.navbarTitle) {
      case 'home':
        return { color: this.colorHome };
      case 'about':
        return { color: this.colorAbout };
      case 'skills':
        return { color: this.colorSkills };
      case 'projects':
        return { color: this.colorProjects };
      case 'contact':
        return { color: this.colorContact };
      default:
        return { color: 'black' }; // Cor padrão
    }
  }
}
