import React from 'react';
import PropTypes from 'prop-types';
import VerificationField from "./VerificationField";
import NumberSpinnerField from "./NumberSpinnerField";
import {Grid, Card, Button} from 'semantic-ui-react';

class CreateTournament extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateTournament = this.onUpdateTournament.bind(this);
    this.onSaveTournament = this.onSaveTournament.bind(this);
    
    this.state ={
      Tournament: {
        name:'',
        raceCount: 1
      }
    }
  }

  onUpdateTournament(event, data){
    let name = data.value;
    let raceCount = data.count;
    if(name !== undefined){ 
      this.setState({
        Tournament: {
          name,
          raceCount: this.state.Tournament.raceCount
        }
      });
    }
    if(raceCount !== undefined){
      this.setState({
        Tournament: {
          name: this.state.Tournament.name,
          raceCount
        }
      });
    }
  }
  
  onSaveTournament(event, data){
    if(this.state.Tournament.name !== '') {
      this.props.onSaveTournament(event, {...data, Tournament: this.state.Tournament});
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
                    <h1>Create Tournament</h1>
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <VerificationField
                      endpoint="api/Tournament/IsNameUnique" 
                      otherProps={{placeholder: 'Tournament Name', fluid:true}} 
                      onAcceptValue={this.onUpdateTournament}/>
                  <br/>
                  <h2>Number of Races</h2>
                  <NumberSpinnerField
                      minimum={1}
                      maximum={100}
                      onAcceptValue={this.onUpdateTournament}
                  />
                  <br/><br/>
                  <Button basic color={"green"} onClick={this.onSaveTournament}>Create Tournament</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

CreateTournament.propTypes = {
  onSaveTournament: PropTypes.func.isRequired
};

export default CreateTournament;