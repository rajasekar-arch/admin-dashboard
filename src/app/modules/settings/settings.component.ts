import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { IProfileDetails } from '../../interfaces/settings.interface';

@Component({
  selector: 'app-settings',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, MatFormFieldModule],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  public profileForm!: FormGroup;

  // Track which fields are in edit mode
  public editMode: Record<string, boolean> = {};

  public fields: IProfileDetails[] = [
    { label: 'First Name', key: 'firstName', type: 'text' },
    { label: 'Last Name', key: 'lastName', type: 'text' },
    { label: 'Mobile Number', key: 'mobile', type: 'tel' },
    { label: 'Email ID', key: 'email', type: 'email' },
  ];

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
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

  public enableEdit(fieldKey: string): void {
    this.editMode[fieldKey] = true;
  }

  public saveField(fieldKey: string): void {
    const control = this.profileForm.get(fieldKey);
    if (control?.valid)
      this.editMode[fieldKey] = false;
    else
      control?.markAsTouched(); // Show validation message

  }

  public submitForm(): void {
    if (this.profileForm.valid)
      console.log('Form submitted:', this.profileForm.value);
    else
      console.log('Form invalid');

  }
}
