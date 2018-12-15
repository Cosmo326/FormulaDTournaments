import React from 'react';
import PropTypes from 'prop-types';
import { Table, Radio } from 'semantic-ui-react';

class RadioNumbering extends React.Component{
  constructor(props) {
    super(props);
    this.isSelected = this.isSelected.bind(this);
    
  }

  isSelected(index){
    return index === this.props.defaultValue;
  }

  render(){
    let radios = [];

    for(let i = this.props.minimum; i <= this.props.maximum; i++) {
      radios.push(
        <Table.Cell key={i}>
          <Table collapsing basic={'very'} compact={'very'} >
            <Table.Header>
              <Table.Row><Table.Cell>{i}</Table.Cell></Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row><Table.Cell>
                <Radio
                  name={this.props.name}
                  value={i}
                  checked={this.isSelected(i)}
                  onChange={this.props.onChange}
                />
              </Table.Cell></Table.Row>
            </Table.Body>
          </Table>
        </Table.Cell>
      );
    }
    
    return(
       <Table collapsing basic={'very'} compact={'very'}>
         <Table.Body>
           <Table.Row>
             {radios}
           </Table.Row>
         </Table.Body>
       </Table> 
    );
  }

}

RadioNumbering.propTypes = {
  name: PropTypes.string.isRequired,
  maximum: PropTypes.number,
  minimum: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default RadioNumbering;