export interface DepartmentNode {
  name: string;
  children?: DepartmentNode[];
}

export const TREE_DATA: DepartmentNode[] = [
  {
    name: 'Engineering',
    children: [{ name: 'Frontend' }, { name: 'Backend' }],
  },
  {
    name: 'HR',
    children: [{ name: 'Recruitment' }, { name: 'Training' }],
  },
];
