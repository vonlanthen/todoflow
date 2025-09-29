import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Que devez-vous faire ?"
          className="w-full px-6 py-4 pl-14 text-lg bg-gray-800/90 backdrop-blur-sm border-2 border-gray-600 rounded-2xl shadow-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/20"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-indigo-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </form>
  );
}