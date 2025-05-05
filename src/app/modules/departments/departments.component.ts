import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/**
 * @title Tree with flat nodes (childrenAccessor)
 */

@Component({
  selector: 'app-departments',
  imports: [MatTreeModule, MatIconButton, MatIconModule, MatButtonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentsComponent {
  public dataSource = EXAMPLE_DATA;
  public childrenAccessor = (node: FoodNode) => node.children ?? [];
  public hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Adminstration',
    children: [{ name: 'Employees' }, { name: 'Service' }, { name: 'Branches' }],
  },
  {
    name: 'Employees',
    children: [
      {
        name: 'Section A',
        children: [{ name: 'Developers' }, { name: 'QA' }],
      },
      {
        name: 'Section B',
        children: [{ name: 'HR' }, { name: 'Management' }],
      },
    ],
  },
];
