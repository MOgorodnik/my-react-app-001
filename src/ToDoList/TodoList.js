import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem";

const styles = {
    ul: {
        listStyle: 'none',
        textAlign: 'left',
        margin: 0,
        padding: '0 0 0 20px',
        lineHeight: '2em'
    }
}

class TodoList extends React.Component {
    render (){
        return (
            <ul style={styles.ul}>
                {/*<li>Static TodoList item</li>*/}
                {/*<li>Static TodoList item</li>*/}
                {/*<TodoListItem  />*/}
                {this.props.propsTodos.map( (todoItem, indx) => {
                    return <TodoListItem todoOneItemObject = { todoItem } key = {todoItem.id } indx = {indx}/>
                })}
            </ul>
        )
    }
}

TodoList.propTypes = {
    propsTodos: PropTypes.array
};

export default TodoList;