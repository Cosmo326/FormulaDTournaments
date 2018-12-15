import React from 'react';
import { connect } from 'react-redux';
import SearchField from "./SearchField";
import {bindActionCreators} from "redux";
import {GetTournament} from "../store/Tournament";

class Home extends React.Component{
  constructor(props) {
    super(props);
    
    this.onTournamentSearch = this.onTournamentSearch.bind(this);
  }
  
  onTournamentSearch(event, data){
    this.props.GetTournament(event, {...data, id:data.result.id});
    this.props.history.push('/Tournament')
  }

  render (){  
    return(
      <div>
        <br/>
        <h1>Formula D Tournament Tracker</h1>
        <SearchField searchaction={this.onTournamentSearch} autocompleteurl={"/api/Tournament/Find/"} placeholder={'Find Tournament'}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    GetTournament: bindActionCreators(GetTournament, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
