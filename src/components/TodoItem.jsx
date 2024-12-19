import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-800 shadow-md rounded-lg py-4 px-6 mb-4">
      {/* Todo Text */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-400 font-medium">{index + 1}.</span>
        <span
          className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-200'
            }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {/* Toggle Button */}
        <button
          className="p-2 text-gray-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
          onClick={() => dispatch(toggleTodo(index))}
          title={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        >
          {todo.completed ? <FaToggleOff size={18} /> : <FaToggleOn size={18} />}
        </button>

        {/* Remove Button */}
        <button
          className="p-2 text-gray-200 bg-red-600 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none transition duration-200"
          onClick={() => dispatch(removeTodo(index))}
          title="Remove Todo"
        >
          <FaTrash size={16} />
        </button>

        {/* Mark Complete Button */}
        {!todo.completed && (
          <button
            className="p-2 text-gray-200 bg-green-600 rounded-full hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
            onClick={() => dispatch(markCompleted(index))}
            title="Mark as Completed"
          >
            <FaCheck size={16} />
          </button>
        )}

        {/* Mark Incomplete Button */}
        {todo.completed && (
          <button
            className="p-2 text-gray-200 bg-yellow-600 rounded-full hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-200"
            onClick={() => dispatch(markIncomplete(index))}
            title="Mark as Incomplete"
          >
            <FaTimes size={16} />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
