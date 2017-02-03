var React = require('react');
import AddToDo from '../containers/AddToDo';
import Table from '../containers/Table'

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      addToDoInput : "",
      todoList: []
    }
  }
  handleShow(todo){
   this.setState({
     todoList: this.state.todoList.concat([todo]),
     addToDoInput: ""
   })
 }
  removeTask(index){
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList
    // console.log("hi", index);
    })
  }
  upDateChange(input){
    this.setState({
      addToDoInput: input
    })
  }
  render () {
    return (
      <div>
        <AddToDo
          input={this.state.addToDoInput}
          update={this.upDateChange.bind(this)}
          updatedState={this.handleShow.bind(this)}
      />
      <Table data={this.state.todoList}
        removeTask={this.removeTask.bind(this)}
      />
      </div>
    )
  }
};

module.exports = TodoApp;
