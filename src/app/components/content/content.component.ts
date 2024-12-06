import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-content',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() activeColumn: string = '';

  get marginLeft(): string {
    const columns = ['home', 'about', 'skills', 'projects', 'contact'];
    const index = columns.indexOf(this.activeColumn);
    return `${5 + index * 5}vw`; // Calcula a posição com base na coluna ativa
  }

  get content(): string {
    switch (this.activeColumn) {
      case 'home':
        return 'Bem-vindo à Home!';
      case 'about':
        return 'Sobre Mim';
      case 'skills':
        return 'Minhas Skills';
      case 'projects':
        return 'Meus Projetos';
      case 'contact':
        return 'Entre em Contato';
      default:
        return '';
    }
  }
}
