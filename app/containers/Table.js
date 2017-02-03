import React, { Component } from "react";
import Tr from './Tr'
export default class Table extends Component{

  handleMap(elem, index){
    return (
      <Tr key={index} elem={elem} index={index} removeTask={this.props.removeTask}/>
    );
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>TODO</th>
            <th>COMPLETED</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
        {this.props.data.map(this.handleMap.bind(this))}
        </tbody>
      </table>
    );
  }
}
