import React from 'react'

import { ExampleComponent, Button, Icon, Grid } from 'library-1';
import 'library-1/dist/index.css';

const ButtonColumn = ({ arr, variant = '', disabled = false, size = "" }) => {
  // const 
  return <>
    {arr.map((val, i) => <div className={`col`}>
      <Button key={`val-${i}`} size={size} disabled={disabled} color={val} variant={variant} > label button </Button>
    </div>)}
  </>
}

const App = () => {
  return <> <ExampleComponent text="Create React Library Example 😄" />

    <div className="row mb-1">
      <ButtonColumn arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} />
    </div>
    <div className="row mb-1">
      <ButtonColumn arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} variant="outline" />
    </div>
    <div className="row mb-1">
      <ButtonColumn arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} disabled={true} />
    </div>
    <div className="row mb-1">
      <ButtonColumn arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} variant="outline" disabled={true} />
    </div>

    <div className="row mb-1">
      <ButtonColumn size="large" arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} />
    </div>
    <div className="row mb-1">
      <ButtonColumn size="large" arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} variant="outline" />
    </div>
    <div className="row mb-1">
      <ButtonColumn size="large" arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} disabled={true} />
    </div>
    <div className="row mb-1">
      <ButtonColumn size="large" arr={['primary', 'secondary-green', 'secondary-blue', 'secondary-purple']} variant="outline" disabled={true} />
    </div>

    <Icon name="alarm" />
    <Icon name="home" size="3" />
    <Icon name="alarm" size="5" />
    <Icon name="alarm" size="55" />

    <Grid container >
      <Grid sm="2" md="8" variant="span" className="hola mundo">col</Grid>
      <Grid sm="8" md="2">col</Grid>
      <Grid sm="2" md="2">col</Grid>
    </Grid>

    <Button color="primary" size="large" > label button </Button>
    <Button onClick={() => {
      console.log('hola mundo');
    }}> hola mundo click me</Button>
  </>
}

export default App
