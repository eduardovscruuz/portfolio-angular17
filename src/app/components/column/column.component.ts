import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() icon: string = ''; // Ícone a ser exibido
  @Input() color: string = ''; // Cor dinâmica
  @Input() isActive: boolean = false; // Define se está ativo ou não

  getstyles() {
    return {
      backgroundColor: this.color,
      marginRight: this.isActive ? '75vw' : '0',
    };
  }
}
