import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, Table } from 'semantic-ui-react';

class NumberSpinnerField extends React.Component{
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      disabled: this.props.disabled == null ? false: this.props.disabled,
      currentCount: props.defaultValue == null ? 1 : props.defaultValue,
      min: props.minimum == null ? 0 : props.minimum,
      max: props.maximum == null ? 10 : props.maximum,
      step: props.step == null ? 1 : props.step,
    };
    
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease(event, data){
    let count = this.state.currentCount + this.state.step;
    if(count <= this.state.max) {
      this.setState({currentCount: count});

      if (this.props.onAcceptValue != null) {
        this.props.onAcceptValue(event, {...data, count});
      }
    }
  }
  
  onDecrease(event, data){
    let count = this.state.currentCount - this.state.step;
    if(count >= this.state.min) {
      this.setState({currentCount: count});
    
      if(this.props.onAcceptValue != null){
        this.props.onAcceptValue(event, {...data, count});
      }
    }
  }
  
  render(){
    return (
        <Table basic={'very'} compact={'very'} size={'small'} collapsing>
          <Table.Body>
            <Table.Row verticalAlign={'middle'}>
              <Table.Cell collapsing>
                <Button onClick={this.onIncrease} color={"green"} disabled={this.state.disabled}>+</Button>&nbsp;
              </Table.Cell>
              <Table.Cell collapsing>
                <Label fluid={"true"} size={'big'} basic>{this.state.currentCount}</Label>&nbsp;&nbsp;
              </Table.Cell>
              <Table.Cell collapsing>
                <Button onClick={this.onDecrease} color={'red'} disabled={this.state.disabled}>-</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    )
  }
}

NumberSpinnerField.propTypes = {
  minimum: PropTypes.number,
  maximum: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  onAcceptValue: PropTypes.func
};

export default NumberSpinnerField;