import React from 'react';
import ReactDOM from 'react-dom';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
class TodoApp extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      list:[],
      currentIdx:0,
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

  render(){
    //<TodoHeader text="Welcome to my TodoList app ! "/>
    return(
      <div>
        <AppBar
          title="React/Material-UI TodoList"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Paper>
          <TodoInput addItem={this.addItem}/>
          <Divider/>
          <TodoList removeItem={this.removeItem} list={this.state.list}/>
        </Paper>
      </div>
    )
  }
}

const TodoHeader = (props) => <label onClick={props.additem}>{props.text}</label>

ReactDOM.render(<TodoApp/>, document.getElementById('app'))
