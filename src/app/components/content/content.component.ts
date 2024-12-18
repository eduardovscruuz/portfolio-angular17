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
  @Input() pagePosition: string = '';

  moveAccordingToPage(): { left: string } {
    if (this.pagePosition === 'home') {
      return { left: '5vw' };
    } else if (this.pagePosition === 'about') {
      return { left: '10vw' };
    } else if (this.pagePosition === 'skills') {
      return { left: '15vw' };
    } else if (this.pagePosition === 'projects') {
      return { left: '20vw' };
    } else if (this.pagePosition === 'contact') {
      return { left: '25vw' };
    }
    return { left: '0vw' };
  }
}
