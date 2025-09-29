import React from 'react';
import { CheckSquare } from 'lucide-react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { TodoStats } from './components/TodoStats';

function App() {
  const {
    todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/50">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              TodoFlow
            </h1>
          </div>
          <p className="text-gray-300 text-lg">Organisez votre vie, une tâche à la fois</p>
        </header>

        <div className="space-y-6">
          <TodoInput onAdd={addTodo} />
          
          <TodoStats stats={stats} />
          
          <TodoFilters
            currentFilter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompleted}
          />

          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                  <CheckSquare className="w-12 h-12 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {filter === 'active' && stats.total > 0
                    ? 'Tout est fait !'
                    : filter === 'completed' && stats.total > 0
                    ? 'Aucune tâche terminée pour le moment'
                    : 'Aucune tâche pour le moment'}
                </h3>
                <p className="text-gray-400">
                  {filter === 'active' && stats.total > 0
                    ? 'Vous avez terminé toutes vos tâches. Il est temps d\'en ajouter d\'autres !'
                    : filter === 'completed' && stats.total > 0
                    ? 'Terminez quelques tâches pour les voir ici.'
                    : 'Ajoutez votre première tâche ci-dessus pour commencer.'}
                </p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  birdName={todo.birdName}
                  completed={todo.completed}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))
            )}
          </div>
        </div>

        {stats.total > 0 && (
          <footer className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              {stats.active === 0 && stats.completed > 0
                ? '🎉 Félicitations ! Toutes les tâches sont terminées !'
                : `Continuez ! ${stats.active} tâche${stats.active === 1 ? '' : 's'} restante${stats.active === 1 ? '' : 's'}.`}
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;