import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Button } from 'semantic-ui-react';
import moment from "moment";
import CreatePlayerModal from "./CreatePlayerModal";

class ViewRace extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { 
      createPlayerModalOpen: false
    };
    
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleCloseModal(){
    this.setState({createPlayerModalOpen: false});
  }
  
  handleOpenModal(){
    this.setState({createPlayerModalOpen: true});
  }
  
  render() {
    return (
        <div>
          <h1>View Race</h1>
          <Grid>
            <Grid.Column width={6}>
              <Card fluid onClick={this.props.onViewTournament} color={'grey'} raised>
                <Card.Content>
                  <Card.Header>{this.props.Tournament.name}</Card.Header>
                  <Card.Meta>{(new moment(this.props.Tournament.startDate)).toString()}</Card.Meta>
                </Card.Content>
              </Card>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{this.props.Race.track}</Card.Header>
                  <Card.Meta>{(new moment(this.props.Race.raceDate)).toString()}<br/>Laps: {this.props.Race.laps}</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <Card>
                <Card.Content>
                  <Card.Header>Current Standings</Card.Header>
                </Card.Content>
                <Card.Content>
                  No CurrentStandings
                </Card.Content>
                <Card.Content>
                  {
                    (this.props.Race.racers === undefined || this.props.Race.racers.length < 10) &&
                    (this.props.Race.turns === undefined || this.props.Race.turns.length === 0) &&
                    <Button basic color={'green'} onClick={this.handleOpenModal}>Add Racer</Button>
                  }
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <CreatePlayerModal 
              open={this.state.createPlayerModalOpen} 
              racers={this.props.Racers} 
              handleAddRacer={this.props.onAddRacer} 
              handleCloseModal={this.handleCloseModal}
          />
        </div>
    );
  }
}

ViewRace.propTypes = {
  Tournament: PropTypes.object.isRequired,
  Race: PropTypes.object.isRequired,
  onViewTournament: PropTypes.func.isRequired,
  Racers: PropTypes.array,
  onAddRacer: PropTypes.func.isRequired
};

export default ViewRace;