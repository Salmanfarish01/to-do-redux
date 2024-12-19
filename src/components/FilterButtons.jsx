import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center p-4 bg-gray-800 rounded-lg shadow-md">
      {/* Dropdown for Filter */}
      <div className="relative">
        <select
          className="text-sm px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          value={currentFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
      </div>

      {/* Mark All Completed Button */}
      <button
        className="text-sm px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-500 transition duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
