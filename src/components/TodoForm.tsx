import React, { useState } from "react";

interface Props {
    handleOnSubmit: (value: string) => void;
}

const TodoForm:React.FC<Props> = ({handleOnSubmit}) => {
    const[value, setValue] = useState('')

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit(value);
            setValue('')
            }}>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />

        </form>
    )
}

export default TodoForm;