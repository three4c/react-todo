import React from 'react';

const List = (props) => (
    <ul className="form__list">
        {props.todos.map((todo, i) => {
            return <li key={i} className="form__item">{todo.title} <span className="form__del" onClick={() => props.handleRemove(i)}>Delete</span></li>
        })}
    </ul>
)

export default List;