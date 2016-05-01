import React from 'react';
import TodoItem from './TodoItem';
import {Table, TableBody} from 'material-ui/lib/table';

class TodoList extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
  }

  update(){
    this.props.update();
  }

  render(){
    let divs = this.props.list.map((val) => {
      return (
        <TodoItem key={val.key}
                  txt={val.value}
                  removeItem={this.props.removeItem.bind(null,val.key)}/>
      );
    });

    let tooltipVisibleFixStyle = {
      overflow: 'visible'
    }

    let displayedList = <div style={{margin:'20px'}}>Aucune tâche</div>;
    if (divs.length > 0)
    {
      displayedList = (
        <Table bodyStyle={tooltipVisibleFixStyle} wrapperStyle={tooltipVisibleFixStyle}>
          <TableBody style={tooltipVisibleFixStyle}>
            {divs}
          </TableBody>
        </Table>
      );
    }

    return displayedList;
  }
}

export default TodoList
