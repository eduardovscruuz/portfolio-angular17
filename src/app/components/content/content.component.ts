import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  activeColumn: string = 'contact';
  techStack = [
    { src: 'assets/tech-stack/javascript.png', isFlipping: false },
    { src: 'assets/tech-stack/sass.png', isFlipping: false },
    { src: 'assets/tech-stack/typescript.png', isFlipping: false },
    { src: 'assets/tech-stack/angular.png', isFlipping: false },
    { src: 'assets/tech-stack/csharp.png', isFlipping: false },
    { src: 'assets/tech-stack/dotnet.png', isFlipping: false },
    { src: 'assets/tech-stack/node.png', isFlipping: false },
    { src: 'assets/tech-stack/nest.png', isFlipping: false },
    { src: 'assets/tech-stack/git.png', isFlipping: false },
    { src: 'assets/tech-stack/docker.png', isFlipping: false },
    { src: 'assets/tech-stack/mysql.png', isFlipping: false },
    { src: 'assets/tech-stack/mongodb.png', isFlipping: false },
  ];

  onMouseEnter(tech: any) {
    tech.isFlipping = true;
  }

  onAnimationEnd(tech: any) {
    tech.isFlipping = false;
  }
}
