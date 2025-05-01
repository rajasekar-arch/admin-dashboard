import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { DepartmentNode, TREE_DATA } from './data';
@Component({
  selector: 'app-departments',
  imports: [MatTreeModule, MatIconButton, MatIconModule, MatButtonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  public treeControl = new NestedTreeControl<DepartmentNode>((node) => node.children);
  public dataSource = new MatTreeNestedDataSource<DepartmentNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  public hasChild = (_: number, node: DepartmentNode) => !!node.children && node.children.length > 0;
}
