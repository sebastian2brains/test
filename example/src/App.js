import React from 'react'

import { Button, Icon, Grid } from 'library-1';
import 'library-1/dist/index.css';
import 'library-1/dist/css/custom.css';

const App = () => {
  return <>
    <div className="container">
      <div className="row mb-2 justify-content-center align-items-center">
        <div className="col-md-2">
          <Button color="primary" prefix="write" onClick={() => alert('hola')}  > label click </Button>
        </div>
        <div className="col-md-2">
          <Button color="primary" prefix="write" > label button </Button>
        </div>
      </div>
      <Grid row className="align-items-center" >
        <Grid md={2} variant="span">
          <Button color="primary" prefix="write" onClick={() => alert('hola')}  > label click </Button>
          <Button color="primary" prefix="write" > label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="primary" prefix="write" variant="outline" > label button </Button>
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md={2}>
          <Button color="primary" suffix="write" variant="text" > label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="secondary" suffix="alarm" > label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="secondary" prefix="write" variant="outline" > label button </Button>
          <Icon name="alarm" size="5" />
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md={2} className="mb-5">
          <Button color="secondary" suffix="alarm" variant="text" > label button </Button>
        </Grid>
      </Grid>

      <Grid row >
        <Grid md={2}>
          <Button color="primary" prefix="write" disabled > label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="primary" prefix="write" variant="outline" disabled> label button </Button>
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md={2}>
          <Button color="primary" suffix="write" variant="text" disabled> label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="secondary" suffix="alarm" disabled> label button </Button>
        </Grid>
        <Grid md={2}>
          <Button color="secondary" prefix="write" variant="outline" disabled> label button </Button>
          <Icon name="alarm" size="5" />
          <Icon name="alarm" size="5" />
        </Grid>
        <Grid md={2} className="mb-5">
          <Button color="secondary" suffix="alarm" variant="text" disabled> label button </Button>
        </Grid>
      </Grid>
    </div>
  </>
}

export default App
