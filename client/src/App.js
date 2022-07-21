import React from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Forms from './components/Forms/Forms';
import { AppBarComponent, Heading, Image } from './styles';
import memories from './images/memories.png';

const App = () => {

  return (
    <Container maxWidth="lg">
      <AppBarComponent position="static" color="inherit">
        <Heading  variant="h2" align="center">Memories</Heading>
        <Image src={memories} alt="icon" height="60" />
      </AppBarComponent>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;