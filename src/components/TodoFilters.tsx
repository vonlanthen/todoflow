import React from 'react';
import { FilterType } from '../types/todo';

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export function TodoFilters({ currentFilter, onFilterChange, stats, onClearCompleted }: TodoFiltersProps) {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'Toutes', count: stats.total },
    { key: 'active', label: 'Actives', count: stats.active },
    { key: 'completed', label: 'Terminées', count: stats.completed },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md border border-gray-700">
      <div className="flex items-center gap-2">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentFilter === key
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {label}
            <span className={`ml-2 text-sm ${
              currentFilter === key ? 'text-indigo-200' : 'text-gray-500'
            }`}>
              ({count})
            </span>
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all duration-200 font-medium"
        >
          Effacer les Terminées ({stats.completed})
        </button>
      )}
    </div>
  );
}