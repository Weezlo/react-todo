import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/TextField';

class TodoInput extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.state = { value: ""};
  }

  update(e){
    this.setState({value: e.target.value});
  }

  validate(){
    this.props.addItem(this.state.value);
    this.setState({value: ""});
  }
  render(){
    return(
      <TextField
      style={{marginLeft:'20px'}}
      value={this.state.value}
      hintText="Libellé de la tâche"
      floatingLabelText="Nouvelle tâche"
      onEnterKeyDown={this.validate}
      onChange={this.update}
      />
    );
  }

}

export default TodoInput
