import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { IUsersList } from '../../../interfaces/users-list.interface';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, HttpClientModule, MaterialModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  private http = inject(HttpClient);
  private apiLink = 'https://jsonplaceholder.typicode.com/users';
  public displayedColumns: string[] = ['name', 'username', 'email'];
  public dataSource = new MatTableDataSource<IUsersList>();

  public ngOnInit(): void {
    this.getUsersList();
  }

  public getUsersList(): void {
    this.http.get<IUsersList[]>(this.apiLink).subscribe((response: IUsersList[]) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }
}
