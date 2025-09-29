import React from 'react';
import { CheckCircle2, Circle, Target } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export function TodoStats({ stats }: TodoStatsProps) {
  const completionRate = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Target className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Total des Tâches</p>
            <p className="text-xl font-bold text-white">{stats.total}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <Circle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Actives</p>
            <p className="text-xl font-bold text-white">{stats.active}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Terminées</p>
            <p className="text-xl font-bold text-white">{stats.completed}</p>
          </div>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="sm:col-span-3 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Progrès</span>
            <span className="text-sm font-bold text-indigo-600">{Math.round(completionRate)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500 shadow-md shadow-indigo-500/50"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}