import React from 'react'

import { Button, Icon, Grid, Card } from 'library-1';
import 'library-1/dist/index.css';
import 'library-1/dist/css/custom.css';

const App = () => {
  return <>
    <div className="container p-4">

      <h1 className="mb-1">Fonts</h1>

      <h1> Sed ut perspiciatis unde omnis iste natus error </h1>
      <h2> Sed ut perspiciatis unde omnis iste natus error </h2>
      <h3> Sed ut perspiciatis unde omnis iste natus error </h3>
      <h4> Sed ut perspiciatis unde omnis iste natus error </h4>
      <h5> Sed ut perspiciatis unde omnis iste natus error </h5>
      <h6> Sed ut perspiciatis unde omnis iste natus error </h6>

      <h1 className="mb-1">Icons</h1>

      <div className="d-flex align-items-baseline">
        <Icon className="p-1" name="flag" />
        <Icon className="p-1" name="flag" size="2" />
        <Icon className="p-1" name="flag" size="3" />
        <Icon className="p-1" name="flag" size="4" />
        <Icon className="p-1" name="flag" size="5" />
        <Icon className="p-1" name="flag" size="6" />
        <Icon className="p-1" name="flag" size="7" />
        <Icon className="p-1" name="flag" size="8" />
      </div>
      <div className="d-flex align-items-baseline">
        <Icon className="p-1" name="line-flag" />
        <Icon className="p-1" name="line-flag" size="2" />
        <Icon className="p-1" name="line-flag" size="3" />
        <Icon className="p-1" name="line-flag" size="4" />
        <Icon className="p-1" name="line-flag" size="5" />
        <Icon className="p-1" name="line-flag" size="6" />
        <Icon className="p-1" name="line-flag" size="7" />
        <Icon className="p-1" name="line-flag" size="8" />
      </div>

      <h1 className="mt-2">buttons</h1>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> </Grid>
        <Grid md={2}> normal </Grid>
        <Grid md={2}> icon left </Grid>
        <Grid md={2}> icon right </Grid>
        <Grid md={2}> disabled </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Primary </Grid>
        <Grid md={2}> <Button color="primary" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="primary" prefix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="primary" suffix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="primary" prefix="write" disabled > lorem </Button> </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Primary outline </Grid>
        <Grid md={2}> <Button variant="outline" color="primary" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="primary" prefix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="primary" suffix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="primary" prefix="write" disabled > lorem </Button> </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Primary text </Grid>
        <Grid md={2}> <Button variant="text" color="primary" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="primary" prefix="arrow-left" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="primary" suffix="arrow-right" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="primary" suffix="arrow-right" disabled > lorem </Button> </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Secondary </Grid>
        <Grid md={2}> <Button color="secondary" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="secondary" prefix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="secondary" suffix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button color="secondary" prefix="write" disabled > lorem </Button> </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Secondary outline </Grid>
        <Grid md={2}> <Button variant="outline" color="secondary" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="secondary" prefix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="secondary" suffix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="outline" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
      </Grid>

      <Grid row className="align-items-center text-center mb-1">
        <Grid> Secondary text </Grid>
        <Grid md={2}> <Button variant="text" color="secondary" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="secondary" prefix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="secondary" suffix="write" > lorem </Button> </Grid>
        <Grid md={2}> <Button variant="text" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
      </Grid>

      <h1 className="mb-1">card</h1>

      <div className="d-flex">
        <Card> hola mundo </Card>
        <Card onClick={() => alert('clicked')} > click me </Card>
        <Card border > hola mundo </Card>
        <Card border onClick={() => alert('clicked con border')} > hola mundo </Card>
      </div>

    </div>
  </>
}

export default App
