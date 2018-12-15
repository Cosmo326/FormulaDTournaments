import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Input, Grid, Table} from 'semantic-ui-react';
import NumberSpinnerField from "./NumberSpinnerField";
import RadioNumbering from "./RadioNumbering";

class TurnModal extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      
    }
  }

  onUpdateValues(event, data){
    
  }
  
  render(){
    return (
        <Modal
            open={this.props.open}
            closeOnEscape={false}
            closeOnDimmerClick={false}
            size={'small'}
        >
          <Modal.Header>Turn</Modal.Header>
          <Modal.Content>
            <Grid fluid={'true'}>
              <Grid.Column width={2} verticalAlign={'middle'}>
                <h2>Gear</h2>
              </Grid.Column>
              <Grid.Column width={6} verticalAlign={'middle'}>
                <NumberSpinnerField minimum={1} maximum={6} defaultValue={1}/>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign={'middle'}>
                <Input placeholder={'Speed'} fluid={'true'}/>
              </Grid.Column>
            </Grid>
            <Table collapsing compact={'very'} basic={'very'} centered>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <i className={'icon-tire icon-lg'} />
                  </Table.Cell>
                  <Table.Cell>
                    <RadioNumbering
                        minimum={0}
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
                        minimum={0}
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
                        minimum={0}
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
                        minimum={0}
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
                        minimum={0}
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
                        minimum={0}
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
            <Button basic color={'green'}>Save</Button>
            <Button basic color={'red'}>Cancel</Button>
          </Modal.Actions>
        </Modal>
    );
  }

}

TurnModal.propTypes = {
  open: PropTypes.bool.isRequired
};

export default TurnModal;

