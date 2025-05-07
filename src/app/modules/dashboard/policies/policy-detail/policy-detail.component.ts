import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../material-module/material/material.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-policy-detail',
  imports: [CommonModule, MaterialModule],
  templateUrl: './policy-detail.component.html',
  styleUrl: './policy-detail.component.scss',
})
export class PolicyDetailComponent implements OnInit {
  categoryKey = '';
  categoryTitle = '';
  policies: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  allPolicies = {
    hr: {
      title: 'HR & Employee Policies',
      items: [
        'Employee Code of Conduct',
        'Work From Home / Remote Work Policy',
        'Attendance and Punctuality Policy',
        'Leave Policy',
        'Equal Opportunity and Anti-Discrimination Policy',
        'Harassment and Anti-Bullying Policy',
        'Onboarding and Offboarding Policy',
        'Dress Code Policy',
        'Performance Review and Appraisal Policy',
        'Resignation & Termination Policy',
      ],
    },
    it: {
      title: 'IT & Security Policies',
      items: [
        'Acceptable Use Policy (AUP)',
        'Data Protection and Privacy Policy',
        'Information Security Policy',
        'Password and Access Control Policy',
        'BYOD Policy',
        'Software Installation and Usage Policy',
        'Remote Access and VPN Policy',
      ],
    },
    dev: {
      title: 'Development & Project Policies',
      items: [
        'SDLC Policy',
        'Code Review and Version Control Policy',
        'Quality Assurance and Testing Policy',
        'Agile/Scrum Guidelines',
        'Deployment and Release Policy',
        'Bug Reporting Policy',
      ],
    },
    legal: {
      title: 'Legal & Compliance Policies',
      items: [
        'Intellectual Property Policy',
        'Confidentiality and NDA Policy',
        'Export Control Policy',
        'Open Source Usage Policy',
        'Copyright Compliance',
      ],
    },
    finance: {
      title: 'Financial Policies',
      items: [
        'Expense Reimbursement Policy',
        'Travel and Business Trip Policy',
        'Compensation and Bonus Policy',
        'Procurement Policy',
      ],
    },
    culture: {
      title: 'Workplace & Culture',
      items: [
        'Workplace Safety Policy',
        'Flexible Work Hours Policy',
        'Diversity and Inclusion Policy',
        'Feedback and Grievance Policy',
        'Company Events Policy',
      ],
    },
  };

  ngOnInit(): void {
    this.categoryKey = this.route.snapshot.paramMap.get('category') || '';
    const categoryData = this.allPolicies[this.categoryKey as keyof typeof this.allPolicies];
    if (categoryData) {
      this.categoryTitle = categoryData.title;
      this.policies = categoryData.items;
    }
  }
  goBack(): void {
    this.location.back();
  }
}
