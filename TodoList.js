import React from 'react';
import TodoItem from './TodoItem';
import {Table, TableBody} from 'material-ui/Table';

class TodoList extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
  }

  update(){
    this.props.update();
  }

  render(){
    let divs = this.props.list.map((val, index) => {
      let first = index == 0;
      return (
        <TodoItem key={val.key}
                  txt={val.value}
                  first={first}
                  removeItem={this.props.removeItem.bind(null,val.key)}/>
      );
    });

    let tooltipVisibleFixStyle = {
      overflow: 'auto'
    }

    let displayedList = <div style={{margin:'20px', height:'40px'}}>Nothing to do</div>;
    if (divs.length > 0)
    {
      displayedList = (
        <Table bodyStyle={tooltipVisibleFixStyle} wrapperStyle={tooltipVisibleFixStyle}>
          <TableBody>
            {divs}
          </TableBody>
        </Table>
      );
    }

    return displayedList;
  }
}

export default TodoList
