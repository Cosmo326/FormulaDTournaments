import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Dropdown, Table } from 'semantic-ui-react';
import RadioNumbering from "./RadioNumbering";

class CreatePlayerModal extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      options:[],
      currentRacer:'',
      tire:6,
      brakes:3,
      transmission:3,
      body:3,
      engine:3,
      handling:2,
    };
    
    this.handleAddRacerName = this.handleAddRacerName.bind(this);
    this.handleRacerChange = this.handleRacerChange.bind(this);
    this.handleSaveRacer = this.handleSaveRacer.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.clearState = this.clearState.bind(this);
  }
  
  handleAddRacerName(event, data){
    this.setState({
      options: [{ text: data.value, value: data.value }, ...this.state.options],
    })
  }
  
  handleRacerChange(event, data){
    this.setState({currentRacer:data.value});
  }
  
  clearState(){
    this.setState({
      currentRacer:'',
      tire:6,
      brakes:3,
      transmission:3,
      body:3,
      engine:3,
      handling:2
    });
  }
  
  handleSaveRacer(event, data){
    const newData = {
      ...data,
      Racer: {
        name: this.state.currentRacer,
        tire: this.state.tire,
        brakes: this.state.brakes,
        transmission: this.state.transmission,
        body: this.state.body,
        engine: this.state.engine,
        handling: this.state.handling
      }
    };
    this.props.handleAddRacer(event, newData);
    this.handleCloseModal(event, data);
  }
  
  handleCloseModal(event, data){
    this.clearState();
    this.props.handleCloseModal(event, data);
  }
  
  render(){
    return (
      <Modal 
          open={this.props.open}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          size={'small'}
      >
        <Modal.Header>Add Player</Modal.Header>
        <Modal.Content>
          <Dropdown
            options={this.state.options}
            search={true}
            selection={true}
            placeholder={'Choose a Racer'}
            fluid={true}    
            allowAdditions={true}
            onAddItem={this.handleAddRacerName}
            onChange={this.handleRacerChange}
          />
          <Table collapsing compact={'very'} basic={'very'} centered>
            <Table.Body>
            <Table.Row>
              <Table.Cell>
                <i className={'icon-tire icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering 
                  minimum={1} 
                  maximum={14} 
                  name={'tire'}
                  defaultValue={this.state.tire}
                  onChange={(event, data) => this.setState({tire: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <i className={'icon-brake icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering
                  minimum={1}
                  maximum={7}
                  name={'brake'}
                  defaultValue={this.state.brake}
                  onChange={(event, data) => this.setState({brake: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
              <i className={'icon-manual-transmission icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering
                  minimum={1}
                  maximum={7}
                  name={'transmission'}
                  defaultValue={this.state.transmission}
                  onChange={(event, data) => this.setState({transmission: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
              <i className={'icon-car-repair icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering
                  minimum={1}
                  maximum={7}
                  name={'body'}
                  defaultValue={this.state.body}
                  onChange={(event, data) => this.setState({body: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
              <i className={'icon-engine icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering
                  minimum={1}
                  maximum={7}
                  name={'engine'}
                  defaultValue={this.state.engine}
                  onChange={(event, data) => this.setState({engine: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
              <i className={'icon-handling icon-lg'} />
              </Table.Cell>
              <Table.Cell>
              <RadioNumbering
                  minimum={1}
                  maximum={7}
                  name={'handling'}
                  defaultValue={this.state.handling}
                  onChange={(event, data) => this.setState({handling: data.value})}
              />
              </Table.Cell>
            </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color={'green'} onClick={this.handleSaveRacer}>Save</Button>
          <Button basic color={'red'} onClick={this.handleCloseModal}>Cancel</Button>
        </Modal.Actions>
      </Modal>  
    );
  }

}

CreatePlayerModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleAddRacer: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  racers: PropTypes.array
};

export default CreatePlayerModal;

