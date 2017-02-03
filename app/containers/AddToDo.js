import  React, {Component } from 'react';

class AddToDo extends Component {

  onHandleChange(event){
    // console.log(this.refs.toDoListInput.value)
    this.props.update(this.refs.toDoListInput.value)
  }

  handleOnSubmit(event){
  event.preventDefault();
  this.props.updatedState(this.refs.toDoListInput.value);
 }
  render(){
    {/*console.log(this)*/}
  return(
    <div>
    <form onSubmit={this.handleOnSubmit.bind(this)}>
    <div className="form-group">
      <label className="col-sm-5 control-label"
        htmlFor="toDoListInput">ENTER REMINDERS FOR YOUR TO DO LIST</label>
      <div className="col-sm-5">
        <input type="text" id="toDoListInput" ref="toDoListInput" value ={this.props.input} onChange={this.onHandleChange.bind(this)}required className="form-control"/>
      </div>
          <button type='submit'>ADD</button>
    </div>
    </form>
    </div>
    )
  }
}

export default AddToDo;
