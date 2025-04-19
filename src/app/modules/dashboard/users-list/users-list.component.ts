import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { IUsersList } from '../../../interfaces/users-list.interface';
import { LoaderComponent } from '../../material-module/loader/loader.component';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, HttpClientModule, MaterialModule, LoaderComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  public isLoading = false;
  private http = inject(HttpClient);
  private apiLink = 'https://jsonplaceholder.typicode.com/users';
  public displayedColumns: string[] = ['name', 'username', 'email'];
  public dataSource = new MatTableDataSource<IUsersList>();
  constructor(private notification: NotificationService) {}
  public ngOnInit(): void {
    this.getUsersList();
  }

  public getUsersList(): void {
    this.isLoading = true;
    this.http.get<IUsersList[]>(this.apiLink).subscribe(
      (response: IUsersList[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        this.notification.error(error.error.message);
        this.isLoading = false;
      },
    );
  }
}
