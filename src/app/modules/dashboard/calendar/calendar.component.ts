import { Component, OnInit } from '@angular/core';
import { CalendarCell } from '../../../interfaces/calendar.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  selectedYear: number = this.currentDate.getFullYear();
  selectedMonth: number = this.currentDate.getMonth();

  years: number[] = [];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  weeks: CalendarCell[][] = [];

  notes: Record<string, string> = {
    '2025-05-01': 'Labor Day',
    '2025-05-10': 'Project Deadline',
    '2025-05-15': 'Team Meeting'
  };

  public ngOnInit(): void {
    this.generateYearList();
    this.generateCalendar(this.selectedYear, this.selectedMonth);
  }

  generateYearList() {
    const start = 2000;
    const end = 2035;
    for (let year = start; year <= end; year++) {
      this.years.push(year);
    }
  }

  generateCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const calendar: CalendarCell[][] = [];
    let week: CalendarCell[] = [];

    // Fill blanks before 1st of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      week.push({ date: null });
    }

    for (let day = 1; day <= totalDays; day++) {
      const cellDate = new Date(year, month, day);
      const key = cellDate.toISOString().split('T')[0];
      week.push({ date: cellDate, note: this.notes[key] });

      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push({ date: null });
      }
      calendar.push(week);
    }

    this.weeks = calendar;
  }

  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar(this.selectedYear, this.selectedMonth);
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar(this.selectedYear, this.selectedMonth);
  }

  onMonthOrYearChange() {
    this.generateCalendar(this.selectedYear, this.selectedMonth);
  }
}
