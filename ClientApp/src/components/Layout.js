import React from 'react';
import NavMenu from './NavMenu';
import { Grid, Container } from 'semantic-ui-react';

export default props => {
    let count = 0;
    return (
    <div>
      <NavMenu />
      <Grid centered>
        <Grid.Column width={15}> 
          {props.children.map(c => <Container fluid key={count++}> {c} </Container>)}
        </Grid.Column>
      </Grid>
    </div>
    );
};
