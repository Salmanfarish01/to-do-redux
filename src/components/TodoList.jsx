import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">
        {filteredTodos.length > 0
          ? "Your Notes"
          : "No notes match the current filters."}
      </h3>

      <ul className="space-y-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))
        ) : (
          <li className="text-sm italic text-gray-400">
            Try adding a new note or updating your search/filter.
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
