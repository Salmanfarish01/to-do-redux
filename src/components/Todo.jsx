import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-200 uppercase tracking-wide">
        Personal Todo App
      </h2>

      {/* Add Todo Input */}
      <div className="flex items-center mb-6">
        <input
          id="addTodoInput"
          className="flex-grow px-4 py-2 text-gray-200 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Add a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={24} />
        </button>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <FilterButtons />
        <div className="flex items-center w-full sm:w-auto">
          <input
            className="flex-grow px-4 py-2 text-gray-200 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* Todo List */}
      <TodoList />
    </div>
  );
};

export default Todo;
