import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() icon: string = '';
  @Input() additionalClasses!: string; // Recebe classes dinamicamente
}
