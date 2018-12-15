import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Input} from "semantic-ui-react";
import React from "react";
import PropTypes from 'prop-types';

class VerificationField extends React.Component {
  constructor(props, context){
    super(props, context);

    this.onNameChange = this.onNameChange.bind(this);

    this.state = {
      unique: null,
      loading: 0
    }
  }

  onNameChange(event, data){
    let value = data.value;
    if(value.length < 3) {
      this.setState({unique:null});
    } else {
      this.setState({loading: this.state.loading + 1});
      fetch(`${this.props.endpoint}?name=${value}`)
          .then(d => d.json())
          .then(d => this.setState({unique: d.unique}))
          .catch(d => this.setState({unique: null}))
          .then(d => this.setState({loading: this.state.loading - 1}));
      if(this.props.onAcceptValue != null) {
        this.props.onAcceptValue(event, {...data, value});
      }
    }
  }

  render() {
    if (this.state.loading > 0) {
      return (
          <Input loading
                 onChange={this.onNameChange}
                 {...this.props.otherProps}
          />
      );
    } else if (this.props.defaultValue !== undefined && this.props.defaultValue !== '') {
      return (
          <Input onChange={this.onNameChange}
                 defaultValue={this.props.defaultValue}
                 {...this.props.otherProps}
          />
      );
    } else if (this.state.unique) {
      return (
          <Input label={{
            color: 'green',
            icon: <FontAwesomeIcon icon={['fas', 'check']} transform={'right-10 down-5'} size={'lg'}/>
          }}
                 labelPosition={'right corner'}
                 onChange={this.onNameChange}
                 {...this.props.otherProps}
          />
      );
    } else if(this.state.unique !== null && !this.state.unique){
      return (
          <Input label={{
            color: 'red',
            icon: <FontAwesomeIcon icon={['fas', 'exclamation']} transform={'right-10 down-5'}
                                   size={'lg'}/>
          }}
                 labelPosition={'right corner'}
                 onChange={this.onNameChange}
                 {...this.props.otherProps}
          />
      );
    } else {
      return (
          <Input onChange={this.onNameChange}
                 {...this.props.otherProps}
          />
      );
    }
  }
}

VerificationField.propTypes = {
  endpoint: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  otherProps: PropTypes.object,
  onAcceptValue: PropTypes.func
};

export default VerificationField;