import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material/material.module';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MaterialModule, NgApexchartsModule],
  providers: [provideCharts(withDefaultRegisterables())],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public totalUsers = 1200;
  public activeUsers = 875;
  public newUsers = 150;

  // Apex charts

  public chartSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69],
    },
  ];

  public chart: ApexChart = {
    type: 'bar',
    height: 350,
  };

  public title: ApexTitleSubtitle = {
    text: 'Monthly Sales Report',
  };

  public xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  };
}
