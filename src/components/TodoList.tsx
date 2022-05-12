import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useAppSelector((state) => state.todoReducer.list);

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};

export default TodoList;
