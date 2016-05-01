import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {greenA700} from 'material-ui/styles/colors';

class TodoInput extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.commit = this.commit.bind(this);
    this.state = { value: "", error: false};
  }

  update(e){
    this.setState({value: e.target.value, error: false});
  }

  validate(e){
    if (e.keyCode !== 13) return;
    this.commit();
  }
  commit(){
    if(!this.state.value) {
      this.setState({error: true});
      return;
    }
    this.props.addItem(this.state.value);
    this.setState({value: "", error: false});
  }
  render(){
    return(
      <div style={{height:'100px', display:'inline-flex', alignItems:'center'}}>
        <TextField
        style={{margin:'20px'}}
        value={this.state.value}
        hintText="Task label"
        errorText={this.state.error&&'Please enter some text'}
        floatingLabelText="New task"
        onKeyDown={this.validate}
        onChange={this.update}
        underlineFocusStyle={styles.underlineStyle}
        hintStyle={styles.hintStyle}
        floatingLabelStyle={styles.floatingLabelStyle}
        />
        <IconButton tooltip="Add"
          onClick={this.commit}
          tooltipPosition="top-center"
          disabled={!this.state.value}>
          <ActionDone />
        </IconButton>
      </div>
    );
  }
}

const styles = {
  underlineStyle: {
    borderColor: 'green',
  },
  hintStyle: {
    color: 'grey',
  },
  floatingLabelStyle: {
    color: 'green',
  },
};

export default TodoInput
