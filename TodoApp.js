import React from 'react';
import ReactDOM from 'react-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoApp extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.state = {
      list:[],
      currentIdx:0,
      open:false
    }
  }

  update(newState){
    this.setState(newState);
  }

  addItem(text){
    //console.log(text);
    let newKey = this.state.currentIdx++;
    let newList = [{key:newKey, value: text}].concat(this.state.list);
    this.update({list: newList});
  }

  removeItem(key){
    let index = this.state.list.map(item => item.key).indexOf(key);
    //console.log(index);
    this.state.list.splice(index, 1);
    this.update({list: this.state.list});
  }

  removeAllItems(){
    this.update({list: [], open: false});
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Remove all"
        primary={true}
        keyboardFocused={true}
        onClick={this.removeAllItems}
      />,
    ];

    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <AppBar style={{width: '500px', backgroundColor:'green'}}
            title="React/Material-UI TodoList"
            showMenuIconButton={false}
            iconElementRight={
              <IconButton tooltip="Remove all"
                onClick={this.handleOpen}
                tooltipPosition='bottom-center'
                disabled={this.state.list.length===0}>
                <ActionDeleteForever />
              </IconButton>
            }
          />
          <Paper style={{width: '500px', textAlign:'center'}}>
            <TodoInput addItem={this.addItem}/>
            <Divider/>
            <TodoList removeItem={this.removeItem} list={this.state.list}/>
          </Paper>
          <Dialog
            title="Warning"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
            Permanently delete all tasks ?
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

const TodoHeader = (props) => <label onClick={props.additem}>{props.text}</label>

ReactDOM.render(<TodoApp/>, document.getElementById('app'))
