import React from 'react'
import TodosItem from './TodoItem'

const Todos = ({ todos, onDelete }) => {
    return (
        todos.map((todo, index) => (
            <TodosItem key={index}
                index={index}
                todo={todo}
                onDelete={onDelete} />
        ))
    )
}

export default Todos