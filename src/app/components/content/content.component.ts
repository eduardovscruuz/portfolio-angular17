import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() move: string = '';

  moverColuna(): { left: string } {
    if (this.move === 'home') {
      return { left: '5vw' };
    } else if (this.move === 'about') {
      return { left: '10vw' };
    } else if (this.move === 'skills') {
      return { left: '15vw' };
    } else if (this.move === 'projects') {
      return { left: '20vw' };
    } else if (this.move === 'contact') {
      return { left: '25vw' };
    }
    // Valor padrão caso nenhuma condição seja atendida
    return { left: '0vw' };
  }
}
