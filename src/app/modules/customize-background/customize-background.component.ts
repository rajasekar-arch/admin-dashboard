import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { MaterialModule } from '../material-module/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customize-background',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './customize-background.component.html',
  styleUrl: './customize-background.component.scss',
})
export class CustomizeBackgroundComponent {
  query = '';
  backgroundImages: string[] = [];
  colors: string[] = [];

  constructor(private renderer: Renderer2) {}

  analyzeQuery() {
    debugger;
    this.backgroundImages = [];
    this.colors = [];

    const lowerQuery = this.query.toLowerCase().trim();

    if (lowerQuery.includes('background') || lowerQuery.includes('image')) {
      // Dynamically generate Unsplash Source API URLs
      for (let i = 0; i < 6; i++) {
        this.backgroundImages.push(
          `https://source.unsplash.com/800x600/?${encodeURIComponent(this.query)}&sig=${i}`,
        );
      }
    } else if (
      lowerQuery.includes('color') ||
      ['red', 'blue', 'green', 'yellow'].some((c) => lowerQuery.includes(c))
    ) {
      this.colors = ['#2196F3', '#4CAF50', '#FFC107', '#FF5722', '#E91E63', '#9C27B0'];
    } else {
      this.colors = ['#F5F5F5', '#CCCCCC', '#000000', '#FFFFFF'];
    }
  }

  public applyBackgroundImage(imageUrl: string): void {
    debugger;
    this.renderer.setStyle(document.body, 'backgroundImage', `url(${imageUrl})`);
    this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
    this.renderer.setStyle(document.body, 'backgroundRepeat', 'no-repeat');
  }

  public applyBackgroundColor(color: string) {
    debugger;
    this.renderer.removeStyle(document.body, 'backgroundImage'); // Clear image
    this.renderer.setStyle(document.body, 'background', color);
    this.renderer.setStyle(document.body, 'backgroundSize', null);
    this.renderer.setStyle(document.body, 'backgroundRepeat', null);
  }
}
