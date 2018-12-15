import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card} from 'semantic-ui-react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import * as TournamentStore from '../store/Tournament';
import * as RaceStore from "../store/Race";
import * as RacersStore from '../store/Racers';

class Race extends React.Component{
  constructor(props) {
    super(props);
    
    this.onSaveRace = this.onSaveRace.bind(this);
    this.onViewTournament = this.onViewTournament.bind(this);
  }
  
  onSaveRace(event, data){
    this.props.onSaveRace(event, data);
  }
  
  onViewTournament(){
    this.props.ClearRace();
    this.props.history.push("/Tournament");
  }

  render(){
    return (
        <div>
          <br/>
          {
              this.props.Race !== RaceStore.initialState ?
                  <ViewRace Tournament={this.props.Tournament} Race={this.props.Race} onViewTournament={this.onViewTournament} onAddRacer={this.props.onAddRacer} /> : 
                  this.props.Tournament !== TournamentStore.initialState ?
                    <CreateRace TournamentId={this.props.Tournament.id} onSaveRace={this.onSaveRace} /> :
                      <Card centered={true} color={'red'}><Card.Content><Card.Header textAlign={'center'}>You've hit a wall</Card.Header></Card.Content></Card>  
              
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Tournament: state.Tournament,
    Race: state.Race
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveRace: bindActionCreators(RaceStore.AddRace, dispatch),
    ClearRace: bindActionCreators(RaceStore.ClearRace, dispatch),
    onAddRacer: bindActionCreators(RacersStore.AddRacer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Race)