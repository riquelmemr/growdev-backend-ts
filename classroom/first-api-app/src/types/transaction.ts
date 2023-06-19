export interface Transaction {
  id: string;
  description: string;
  value: number;
  type: 'income' | 'outcome';
  createdBy: string;
  createdAt: string;
}	