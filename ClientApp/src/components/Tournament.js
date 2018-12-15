import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GetTournament, SaveTournament, initialState } from "../store/Tournament";
import { GetRace, ClearRace } from "../store/Race";
import CreateTournament from './CreateTournament';
import ViewTournament from './ViewTournament';

class Tournament extends React.Component{
  constructor(props, context){
    super(props, context);
    this.onAddRace = this.onAddRace.bind(this);
    this.onViewRace = this.onViewRace.bind(this);
    
    if(this.props.match.params !== undefined && this.props.match.params.id !== undefined){
      this.props.GetTournament(null, {id: this.props.match.params.id});
    }
  }
  
  onAddRace(event, data){
    this.props.ClearRace();
    this.props.history.push('/Race');
  }
  
  onViewRace(event, data){
    this.props.GetRace(event, {...data, id: data.value});
    this.props.history.push('/Race');
  }
  
  render(){
    return (
        <div>
          <br/>
          {this.props.Tournament === initialState ?
              <CreateTournament onSaveTournament={this.props.SaveTournament}/> :
              <ViewTournament Tournament={this.props.Tournament} onAddRace={this.onAddRace} onViewRace={this.onViewRace}/>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Tournament: state.Tournament
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetTournament: bindActionCreators(GetTournament, dispatch),
    SaveTournament: bindActionCreators(SaveTournament, dispatch),
    GetRace: bindActionCreators(GetRace, dispatch),
    ClearRace: bindActionCreators(ClearRace, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);