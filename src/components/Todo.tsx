import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props {
    todo: TodoType;
    index: number;
    handleCompleted: (id: number) => void;
    handleDelete: (id: number) => void;
}



const Todo:React.FC<Props> = ({todo, index, handleCompleted, handleDelete}) => {
    return(
        <div className="todo" style={{textDecoration: todo.completed ? 'line-through' : ''}}>
            {todo.title}
            <div>
                <button className="complete" onClick={() => handleCompleted(index)}>{todo.completed ? 'Incomplete' : 'Completed'}</button>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;