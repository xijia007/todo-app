import { TodoCard } from "./TodoCard";

export function TodoList(props) {

    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === "All" ? todos 
        : selectedTab === "Completed" ? todos.filter(todo => todo.complete) 
        : todos.filter(todo => !todo.complete)

  

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    // <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} />
                    <TodoCard 
                    key={todoIndex} 
                    todoIndex={todos.findIndex(val=>val.input === todo.input)}
                    {...props}
                    todo={todo} />
                )
            })}
        </>
    )
}