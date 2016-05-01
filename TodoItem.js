import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete';

class TodoItem extends React.Component{
  constructor(){
    super();
    this.state = { done:false };
    this.itemDone = this.itemDone.bind(this);
  }
  update(newState){
    //this.props.update();
    this.setState(newState);
  }

  itemDone(e, val){
    this.update({done: val})
  }

  componentWillUpdate(){
    //console.log("item " + this.props.txt + " rendered");
  }

  render(){
    let doneStyle = {
      textDecoration: 'line-through',
    };
    let ttPosition = this.props.first
                    ?"bottom-center"
                    :"top-center";
    return (
      <TableRow>
        <TableRowColumn width={100}>
          <CheckBox defaultChecked={!!this.state.done}
                    onCheck={this.itemDone}
                    label={this.props.txt}
                    labelStyle={this.state.done?doneStyle:{}}
                    iconStyle={{
                      fill: 'green'
                    }}/>
        </TableRowColumn>
        <TableRowColumn width={1} style={{overflow:'visible'}}>
          <IconButton tooltip="Remove"
            onClick={this.props.removeItem}
            tooltipPosition={ttPosition}>
            <ActionDelete />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default TodoItem
