import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from "./ToDoList/TodoList";

// function App1() {
// return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App1;

class App extends React.Component {

    render() {

        const  TODOS = [
            {id: 1, completed: false, title: 'Sun'},
            {id: 2, completed: false, title: 'Moon'},
            {id: 3, completed: false, title: 'Earth'},
            {id: 4, completed: false, title: 'Mars'}
        ];

        return (
            <div>
                <h1>!!! {this.props.titleText} ToDo List !!!</h1>
                <TodoList propsTodos = {TODOS}/>
            </div>

        );
    }
}

export default App;