
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}


class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;


    public addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId,
            task,
            completed: false,
            dueDate
        };
        this.todos.push(newTodo);
        this.nextId++;
    }

 
    public completeTodo(id: number): void {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].completed = true;
        } else {
            console.error(`Todo item with id ${id} not found.`);
        }
    }


    public removeTodo(id: number): void {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        } else {
            console.error(`Todo item with id ${id} not found.`);
        }
    }


    public listTodos(): TodoItem[] {
        return this.todos;
    }

   
    public filterTodosByCompleted(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }


    public updateTodoTask(id: number, newTask: string): void {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].task = newTask;
        } else {
            console.error(`Todo item with id ${id} not found.`);
        }
    }


    public clearCompletedTodos(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

// Some example
const todoList = new TodoList();


todoList.addTodo("Attend the Sofu meeting ", new Date('2025-03-03'));
todoList.addTodo("Complete project", new Date('2025-03-03'));
todoList.addTodo("Attend meeting", new Date('2025-03-03'));


console.log("All Todo Items:");
console.log(todoList.listTodos());


todoList.completeTodo(1);

console.log("\nCompleted Todo Items:");
console.log(todoList.filterTodosByCompleted(true));


todoList.updateTodoTask(2, "Complete project report");


console.log("\nUpdated Todo Items:");
console.log(todoList.listTodos());


todoList.clearCompletedTodos();


console.log("\nTodo Items After Clearing Completed:");
console.log(todoList.listTodos());
