import React, { Component } from 'react'


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        
    }

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <h3>To-do-APP</h3>
                    <form onSubmit={this.props.addItem}>
                        <input name="text" type="text"
                            placeholder="Type Here" 
                            ref = {this.props.inputElement}
                            value = {this.props.currentItem.text}
                            onChange = {this.props.handleInput}
                        />
                        <button type="submit" value="submit"> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList