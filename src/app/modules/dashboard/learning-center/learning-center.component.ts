import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-learning-center',
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  templateUrl: './learning-center.component.html',
  styleUrl: './learning-center.component.scss',
})
export class LearningCenterComponent {
  public data: { name: string; id: number }[] = [
    { name: 'select all', id: -1 },
    { name: 'rajaSekar', id: 1 },
    { name: 'raja', id: 2 },
  ];
  public optionItems = [];
  public selectAllItems = false;

  public selected: { name: string; id: number }[] = [];

  get allOptions(): { name: string; id: number }[] {
    return this.data.filter((option) => option.id !== -1);
  }

  public isAllSelected(): boolean {
    return this.selected.length === this.allOptions.length;
  }

  public isIndeterminateItem(): boolean {
    return this.selected.length > 0 && !this.isAllSelected();
  }

  public toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selected = [];
    } else {
      this.selected = [...this.allOptions];
    }
  }

  public onSelectionChange(event: MatSelectChange): void {
    this.optionItems = event.value;
    const selectAllOption = this.selected.find((item) => item.id === -1);
    if (selectAllOption) {
      this.toggleSelectAll();
    }
  }

  public onOptionChange(event: MatCheckboxChange): void {
    this.selectAllItems = event.checked;
  }
}
