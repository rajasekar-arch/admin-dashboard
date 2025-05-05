import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../modules/material-module/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-document-preview',
  imports: [CommonModule, MaterialModule],
  templateUrl: './document-preview.component.html',
  styleUrl: './document-preview.component.scss',
})
export class DocumentPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; fileUrl: string }) {}
}
