import React from 'react';
import PropTypes from 'prop-types';


class TodoListItem extends React.Component {
    render (){
        return (
            <li>
                <strong>{this.props.todoOneItemObject.id } - {this.props.indx + 1 } ->  </strong>
                {this.props.todoOneItemObject.title }
            </li>
        )
    }
}

TodoListItem.propTypes = {
    todoOneItemObject: PropTypes.object.isRequired,
    indx: PropTypes.number
};

export default TodoListItem;