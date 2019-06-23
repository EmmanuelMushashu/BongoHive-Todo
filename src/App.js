import React, { Component} from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'


var data = [
{text: "This is a long task that fits over multiple lines!",
  key: 2453534566554353,
  show: false,
  completed: false
}, 
{    text: "This is a complted task",
  key: 4353443534534534534,
  show: false,
  completed: true
}
]

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super(); this.state = {
      items: data, currentItem: {text:'', key:'', show: true, completed: false },
    };
  }

  changeStatus = key => {
    const tempItems = this.state.items.slice()

    tempItems.forEach((item) => {
      if (item.key===key) {
        item.completed = !item.completed;
      }
    })
    this.setState({
      items: tempItems,
    })
  }


  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

showEditedItemform = (key) => {
  const tempItems = this.state.items.slice()

  tempItems.forEach((item) => {
    if(item.key===key && !item.completed){
      item.show = !item.show;
    }
    else {
      item.show = false
    }
  })
    this.setState({
      items: tempItems,
    })
}

  editItem = (key, NewText) => {
    const tempItems = this.state.items.slice()
      tempItems.forEach((item) =>{
        if(item.key===key) {
          item.text = NewText
          item.show = false
          item.completed = false
        }
      })
      this.setState({
        items: tempItems,
      })
  }

  handleInput = e => {
    const itemText = e.target.useDebugValue
    const currentItem = { text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: ''},
      })
      data = JSON.stringify(this.state.item)
    }
  }


  render () {
    return (
      <div className="App">
          <TodoList 
            addItem = {this.addItem} 
            inputElement = {this.inputElement}
            handleInput = {this.handleInput}
            currentItem = {this.state.currentItem}
            />
          <TodoItems entries = {this.state.items} deleteItem = {this.deleteItem} editItem = {this.editItem} 
          showEditedItemform = {this.showEditedItemform} changeStatus = {this.changeStatus} />
      </div>
    );
  }
}
export default App;
