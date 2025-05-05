import { Component } from '@angular/core';
import { Contact } from '../../../interfaces/contacts.interface';
import { MaterialModule } from '../../material-module/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [MaterialModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      address: '123 Street, City',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '9876543210',
      address: '456 Avenue, City',
      imageUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Sam Wilson',
      email: 'sam@example.com',
      phone: '5555555555',
      address: '789 Road, City',
      imageUrl: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  selectedContact: Contact | null = null;

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
