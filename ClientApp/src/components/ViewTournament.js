import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Dimmer, Loader, Grid, Card, Table, Button} from 'semantic-ui-react';

const ViewTournament = ({Tournament, onAddRace, onViewRace}) => {
  return (
    <div>
      <h1>View Tournament</h1>
      <Dimmer active={Tournament == null} page><Loader>Loading</Loader></Dimmer>
      {Tournament == null ||
      <Grid>
        <Grid.Column width={4}>
          <Card fluid>
            <Card.Content>
              <Card.Header>{Tournament.name}</Card.Header>
              <Card.Meta>{(new moment(Tournament.startDate)).toString()}</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Header>Number of Races: {Tournament.raceCount}</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={12}>
          <Card fluid>
            <Card.Content>
              <Card.Header>Current Standings</Card.Header>
            </Card.Content>
            <Card.Content>
              {
                Tournament.racers == null || Tournament.racers.length === 0 ?
                    <div>No Current Standings</div> :
                    <Table basic={'very'}>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Racer</Table.HeaderCell>
                          <Table.HeaderCell>Points</Table.HeaderCell>
                          <Table.HeaderCell>Place</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {Tournament.racers.map(r =>
                            <Table.Row>
                              <Table.Cell>{r.Name}</Table.Cell>
                              <Table.Cell>{r.Points}</Table.Cell>
                              <Table.Cell>{r.Place}</Table.Cell>
                            </Table.Row>
                        )}
                      </Table.Body>
                    </Table>
              }
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={16}>
          <Card fluid>
            <Card.Content>
              <Card.Header>Races</Card.Header>
            </Card.Content>
            <Card.Content>
              {
                Tournament.races == null || Tournament.races.length === 0 ?
                    <div>No Races</div> :
                    <Table basic={'very'} celled={true}>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell/>
                          <Table.HeaderCell>Track</Table.HeaderCell>
                          <Table.HeaderCell>Date</Table.HeaderCell>
                          <Table.HeaderCell>Laps</Table.HeaderCell>
                          <Table.HeaderCell>Top 3</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {Tournament.races.map(r =>
                            <Table.Row key={r.id}>
                              <Table.Cell collapsing><Button value={r.id} onClick={onViewRace}>View</Button></Table.Cell>
                              <Table.Cell collapsing>{r.track}</Table.Cell>
                              <Table.Cell collapsing>{(new moment(r.raceDate)).toString()}</Table.Cell>
                              <Table.Cell collapsing>{r.laps}</Table.Cell>
                              <Table.Cell>{r.topPlaces}</Table.Cell>
                            </Table.Row>
                        )}
                      </Table.Body>
                    </Table>
              }
            </Card.Content>
            <Card.Content>
              {
                Tournament.races !== undefined && 
                Tournament.races.length < Tournament.raceCount && 
                <Button basic color={"green"} onClick={onAddRace}>Add Race</Button>
              }
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>}
    </div>
  );
};

ViewTournament.propTypes = {
  Tournament: PropTypes.object.isRequired,
  onAddRace: PropTypes.func.isRequired,
  onViewRace: PropTypes.func.isRequired
};

export default ViewTournament;