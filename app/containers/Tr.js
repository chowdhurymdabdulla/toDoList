import React, {Component} from 'react'

export default class Tr extends Component {
  removeTaskDone(){
    this.props.removeTask(this.props.index)
    console.log(this.props.index);
  }
  render(){
    const {elem, index} = this.props;
    return (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{elem}</td>
        <td><input type="checkbox" /></td>
        <td><input type="button" value="Remove" onClick={this.removeTaskDone.bind(this)}/></td>
      </tr>
    )
  }
}
