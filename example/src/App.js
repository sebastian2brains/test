import React from 'react'

import { ExampleComponent, Button, Icon, Grid } from 'library-1';
import 'library-1/dist/index.css';
import 'library-1/dist/css/custom.css';

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
    <div className="container">
      <Grid container >
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" prefix="write" onClick={() => alert('hola')}  > label click </Button>
          <Button color="primary" prefix="write" > label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" prefix="write" variant="outline" > label button </Button>
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" suffix="write" variant="text" > label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="secondary" suffix="alarm" > label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="secondary" prefix="write" variant="outline" > label button </Button>
          <Icon name="alarm" size="5" />
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md="2" className="mb-5">
          <Button color="secondary" suffix="alarm" variant="text" > label button </Button>
        </Grid>
      </Grid>

      <Grid container >
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" prefix="write" disabled > label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" prefix="write" variant="outline" disabled> label button </Button>
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="primary" suffix="write" variant="text" disabled> label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="secondary" suffix="alarm" disabled> label button </Button>
        </Grid>
        <Grid md="2" variant="span" className="hola mundo">
          <Button color="secondary" prefix="write" variant="outline" disabled> label button </Button>
          <Icon name="alarm" size="5" />
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md="2" className="mb-5">
          <Button color="secondary" suffix="alarm" variant="text" disabled> label button </Button>
        </Grid>
      </Grid>
    </div>
  </>
}

export default App
