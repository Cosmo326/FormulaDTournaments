import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { ClearTournament } from "../store/Tournament";
import { ClearRace } from '../store/Race';
import { ClearRacers } from "../store/Racers";

class NavMenu extends React.Component {
  constructor(props, context){
    super(props, context);
    
    this.setActiveItem = this.setActiveItem.bind(this);
    
    this.state = {
      activeItem: ''
    }
  }
  
  setActiveItem(e, { name }){
    this.setState({ activeItem: name});
    switch(name){
      case 'Home':
      case 'Tournament':
        this.props.ClearTournament();
        this.props.ClearRace();
        this.props.ClearRacers();
        break;
      default:
        break;
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary size="huge" fluid>
          <Menu.Item header name="Formula D" as={Link} to='/Home' active={this.state.activeItem === 'Home'} onClick={this.setActiveItem}/>
          <Menu.Item name="Tournament" as={Link} to='/Tournament' active={this.state.activeItem === 'Tournament'} onClick={this.setActiveItem}/>
        </Menu>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ClearTournament: bindActionCreators(ClearTournament, dispatch),
    ClearRace: bindActionCreators(ClearRace, dispatch),
    ClearRacers: bindActionCreators(ClearRacers, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NavMenu);