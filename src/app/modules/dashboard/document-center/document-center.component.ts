import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material-module/material/material.module';
import { DocumentItem } from '../../../interfaces/documents.interface';
import { DocumentPreviewComponent } from '../../../components/document-preview/document-preview.component';

@Component({
  selector: 'app-document-center',
  imports: [CommonModule, MaterialModule],
  templateUrl: './document-center.component.html',
  styleUrl: './document-center.component.scss',
})
export class DocumentCenterComponent {
  constructor(private dialog: MatDialog) {}

  documents = {
    'Educational Certificates': [
      {
        title: 'Bachelor of Science',
        fileUrl: '/assets/docs/bsc.pdf',
        description: 'Completed in 2015',
      },
      {
        title: 'High School Certificate',
        fileUrl: '/assets/docs/hsc.pdf',
        description: 'Completed in 2010',
      },
    ],
    Awards: [
      {
        title: 'Employee of the Month - Jan 2024',
        fileUrl: '/assets/docs/award-jan.pdf',
        description: '',
      },
    ],
    'Courses Completed Within Organization': [
      {
        title: 'Angular Training',
        fileUrl: '/assets/docs/angular-course.pdf',
        description: 'Completed March 2024',
      },
      { title: 'Leadership Program', fileUrl: '/assets/docs/leadership.pdf', description: '' },
    ],
  };

  openPreview(doc: DocumentItem): void {
    this.dialog.open(DocumentPreviewComponent, {
      width: '80%',
      height: '90%',
      data: doc,
    });
  }
}
