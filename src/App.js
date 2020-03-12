import React from 'react';
import Count from './Components/Count';
import Input from './Components/Input';
import TodoInput from './Components/TodoInput';

class App extends React.Component {
    render() {
        return (
            <div>
                <Count />
                <Input />
                <TodoInput />
            </div>
        )
    }
}

export default App;