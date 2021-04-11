interface Todo {
    id: long;
    text: string;
    complete: boolean;
}

type AddTodo = (text: string) => void;
type ChangeTodos = (todo: Todo) => void;
type DeleteTodos = (todo: Todo) => void;