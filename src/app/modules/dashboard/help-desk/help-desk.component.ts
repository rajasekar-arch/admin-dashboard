import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MaterialModule } from '../../material-module/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../../../components/request-dialog/request-dialog.component';

@Component({
  selector: 'app-help-desk',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.scss',
})
export class HelpDeskComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private dialog: MatDialog) {}
  public requestDescription = '';

  public faqs = [
    {
      question: 'How to apply for leave?',
      answer: 'Go to Leave Management > Apply for Leave and fill the form.',
    },
    {
      question: 'Where can I find my documents?',
      answer: 'Navigate to Documents section to view or download.',
    },
    {
      question: 'How to manage user roles?',
      answer: 'In User Management, select a user and modify role.',
    },
    { question: 'How to set goals?', answer: 'Use the Goals section to set or edit goals.' },
    {
      question: 'Where to find contact details?',
      answer: 'Contacts section lists all important contacts.',
    },
  ];

  public openRequestDialog(): void {
    this.dialog.open(RequestDialogComponent, {
      width: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms',
    });
  }
}
