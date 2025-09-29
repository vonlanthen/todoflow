export interface Todo {
  id: string;
  text: string;
  birdName: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export type FilterType = 'all' | 'active' | 'completed';