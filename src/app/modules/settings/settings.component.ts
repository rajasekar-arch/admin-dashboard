import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  profileForm!: FormGroup;

  // Track which fields are in edit mode
  editMode: Record<string, boolean> = {};

  fields = [
    { label: 'First Name', key: 'firstName', type: 'text' },
    { label: 'Last Name', key: 'lastName', type: 'text' },
    { label: 'Mobile Number', key: 'mobile', type: 'tel' },
    { label: 'Email ID', key: 'email', type: 'email' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      mobile: ['9876543210', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: [
        'john.doe@example.com',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in|edu|gov|co)$/),
        ],
      ],
    });

    // Initialize edit mode for each field to false
    this.fields.forEach((field) => {
      this.editMode[field.key] = false;
    });
  }

  enableEdit(fieldKey: string): void {
    this.editMode[fieldKey] = true;
  }

  saveField(fieldKey: string): void {
    const control = this.profileForm.get(fieldKey);
    if (control?.valid) {
      this.editMode[fieldKey] = false;
    } else {
      control?.markAsTouched(); // Show validation message
    }
  }

  submitForm(): void {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
    } else {
      console.log('Form invalid');
    }
  }
}
