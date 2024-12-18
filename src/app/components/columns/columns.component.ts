import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss',
})
export class ColumnsComponent {
  @Input() icon: string = ''; // Ícone a ser exibido
  @Input() color: string = ''; // Cor dinâmica
  @Input() isActive: boolean = false; // Define se está ativo ou não

  getstyles() {
    return {
      'background-color': this.color,
      'margin-right': this.isActive ? '75vw' : '0',
    };
  }
}
