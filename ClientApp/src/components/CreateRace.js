import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Card, Input, Button} from 'semantic-ui-react';
import NumberSpinnerField from "./NumberSpinnerField";

class CreateRace extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      Race: {
        tournamentId: this.props.TournamentId,
        track: '',
        laps: 1
      }
    };
    
    this.onChangeValues = this.onChangeValues.bind(this);
    this.onSaveRace = this.onSaveRace.bind(this);
  }

  onChangeValues(event, data){
    let track = data.value;
    let laps = data.count;
    if(track !== undefined){
      this.setState({
        Race: {
          tournamentId: this.state.Race.tournamentId,
          track,
          laps: this.state.Race.laps
        }
      });
    }
    if(laps !== undefined){
      this.setState({
        Race: {
          tournamentId: this.state.Race.tournamentId,
          track: this.state.Race.track,
          laps
        }
      });
    }
  }

  onSaveRace(event, data){
    if(this.state.Race.track !== ''){
      this.props.onSaveRace(event, {...data, Race: this.state.Race});
    }
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  <h1>Create Race</h1>
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Input placeholder={"Track"} fluid onChange={this.onChangeValues}/>
                <h2>Laps</h2>
                <NumberSpinnerField minimum={1} maximum={100} onAcceptValue={this.onChangeValues}/>
                <br/>
                <br/>
                <Button basic color={'green'} onClick={this.onSaveRace}>Create Race</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

CreateRace.propTypes = {
  onSaveRace: PropTypes.func.isRequired,
  TournamentId: PropTypes.string.isRequired
};

export default CreateRace;