import React, { useState } from 'react';
import { Check, CreditCard as Edit2, Trash2, X } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  birdName: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ id, text, birdName, completed, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (editText.trim() && editText !== text) {
      onEdit(id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`group relative bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-700 ${
      completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(id)}
          className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 ${
            completed
              ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/50'
              : 'border-gray-500 hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/50'
          }`}
        >
          {completed && (
            <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 transition-opacity duration-300 ${
            completed ? 'opacity-100' : ''
          }`} />
        </button>

        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              autoFocus
            />
          ) : (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-indigo-300 bg-indigo-500/20 px-2 py-1 rounded-full">
                  🦅 {birdName}
                </span>
              </div>
              <span
                className={`text-lg transition-all duration-300 ${
                  completed
                    ? 'line-through text-gray-500'
                    : 'text-white'
                }`}
              >
                {text}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {!completed && !isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/20 rounded-lg transition-all duration-200"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
          {isEditing && (
            <button
              onClick={() => {
                setEditText(text);
                setIsEditing(false);
              }}
              className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => onDelete(id)}
            className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {completed && (
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl pointer-events-none" />
      )}
    </div>
  );
}