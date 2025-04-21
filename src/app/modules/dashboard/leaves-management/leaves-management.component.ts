import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module/material/material.module';

@Component({
  selector: 'app-leaves-management',
  templateUrl: './leaves-management.component.html',
  styleUrl: './leaves-management.component.scss',
  imports: [CommonModule, MaterialModule],
})
export class LeavesManagementComponent {}
