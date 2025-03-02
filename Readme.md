
---

# My Todo List Application

A simple yet powerful Todo List application built in TypeScript, designed to help you manage your tasks efficiently.

## Overview

This project provides a basic Todo List functionality with the following features:

- **Add Todo Items**: Easily add new tasks with a due date.
- **Complete Todo Items**: Mark tasks as completed when you're done.
- **Remove Todo Items**: Delete tasks from the list when they're no longer needed.
- **List Todo Items**: View all tasks in the list at a glance.
- **Filter Todo Items**: Filter tasks by their completed status to focus on what's left.
- **Update Todo Items**: Update the task description of existing items as needed.
- **Clear Completed Todo Items**: Remove all completed tasks from the list with one click.

## Features

- **TypeScript Implementation**: Ensures type safety and clarity in the code.
- **Error Handling**: Basic error handling for scenarios like attempting to complete or remove non-existent tasks.
- **Example Usage**: Demonstrates how to use the Todo List class to perform various operations.

## Requirements

- **Node.js**: To run the TypeScript compiler and execute the application.
- **TypeScript**: To compile and run the TypeScript code.


## Usage

The application is designed to be used programmatically. You can create a new instance of the `TodoList` class and call its methods to manage your todo items.

### Example

```typescript
const todoList = new TodoList();

// Add some todo items
todoList.addTodo("Attend the Sofu meeting ", new Date('2025-03-03'));
todoList.addTodo("Complete project", new Date('2025-03-03'));
todoList.addTodo("Attend meeting", new Date('2025-03-03'));

// List all todo items
console.log("All Todo Items:");
console.log(todoList.listTodos());

// Complete a todo item
todoList.completeTodo(1);

// List completed todo items
console.log("\nCompleted Todo Items:");
console.log(todoList.filterTodosByCompleted(true));

// Update a todo item
todoList.updateTodoTask(2, "Complete project report");

// List updated todo items
console.log("\nUpdated Todo Items:");
console.log(todoList.listTodos());

// Clear completed todo items
todoList.clearCompletedTodos();

// List todo items after clearing completed ones
console.log("\nTodo Items After Clearing Completed:");
console.log(todoList.listTodos());
```
### Output

```All Todo Items:
[
  {
    id: 1,
    task: 'Attend the Sofu meeting ',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  },
  {
    id: 2,
    task: 'Complete project',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Attend meeting',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  }
]

Completed Todo Items:
[
  {
    id: 1,
    task: 'Attend the Sofu meeting ',
    completed: true,
    dueDate: 2025-03-03T00:00:00.000Z
  }
]

Updated Todo Items:
[
  {
    id: 1,
    task: 'Attend the Sofu meeting ',
    completed: true,
    dueDate: 2025-03-03T00:00:00.000Z
  },
  {
    id: 2,
    task: 'Complete project report',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Attend meeting',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  }
]

Todo Items After Clearing Completed:
[
  {
    id: 2,
    task: 'Complete project report',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Attend meeting',
    completed: false,
    dueDate: 2025-03-03T00:00:00.000Z
  }
]
```
## Summary
 This Todo List application is one of my projects aimed at helping users manage their tasks more efficiently.

## Contributing

Contributions are welcome! If you have any ideas or improvements. Hope you understood it 😊
