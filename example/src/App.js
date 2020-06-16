import React, { useState } from 'react';

import {
  Button,
  Icon,
  Grid,
  Card,
  Checkbox,
  Logo,
  HeaderItem,
  Header,
  Input
} from 'library-1';
import 'library-1/dist/index.css';
import 'library-1/dist/css/custom.css';

const App = () => {
  const [checked, setCheckbox] = useState(false);
  const [secondChecked, setSecondCheckbox] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleCheckbox = (value) => {
    setCheckbox(value)
  }

  const inputSuffix = <Icon onClick={() => alert('hola')} name="eye-open" />
  const inputPrefix = <Icon onClick={() => alert('hola')} size={1} name="line-user" />
  const inputPrefixText = '$';

  return <> <div className="container p-lg-4">

    <h1 className="mb-4">Fonts</h1>

    <h1> Sed ut perspiciatis unde omnis iste natus error </h1>
    <h2> Sed ut perspiciatis unde omnis iste natus error </h2>
    <h3> Sed ut perspiciatis unde omnis iste natus error </h3>
    <h4> Sed ut perspiciatis unde omnis iste natus error </h4>
    <h5> Sed ut perspiciatis unde omnis iste natus error </h5>
    <h6> Sed ut perspiciatis unde omnis iste natus error </h6>

    <h1 className="mb-4">Icons</h1>

    <div className="d-flex align-items-baseline flex-wrap">
      <Icon className="p-4" name="home" />
      <Icon className="p-4" name="flag" size="2" />
      <Icon className="p-4" name="flag" size="3" />
      <Icon className="p-4" name="flag" size="4" />
      <Icon className="p-4" name="flag" size="5" />
      <Icon className="p-4" name="flag" size="6" />
      <Icon className="p-4" name="flag" size="7" />
      <Icon className="p-4" name="flag" size="8" />
    </div>
    <div className="d-flex align-items-baseline flex-wrap">
      <Icon className="p-4" name="line-flag" />
      <Icon className="p-4" name="line-flag" size="2" />
      <Icon className="p-4" name="line-flag" size="3" />
      <Icon className="p-4" name="line-flag" size="4" />
      <Icon className="p-4" name="line-flag" size="5" />
      <Icon className="p-4" name="line-flag" size="6" />
      <Icon className="p-4" name="line-flag" size="7" />
      <Icon className="p-4" name="line-flag" size="8" />
    </div>

    <h1 className="mt-5">Buttons</h1>

    <Grid row className="align-items-center text-center mb-4 flex-wrap d-none d-sm-flex">
      <Grid col={12} md={1} lg={1} xl={4} />
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> normal </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> icon left </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> icon right </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> disabled </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="primary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary outline </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="outline" color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="primary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Primary text </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="text" color="primary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" prefix="arrow-left" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" suffix="arrow-right" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="primary" suffix="arrow-right" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary outline </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="outline" color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="outline" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <Grid row className="align-items-center text-center mb-4">
      <Grid col={12} md={1} lg={1} xl={4}> Secondary text </Grid>
      <Grid className="p-4" col={6} md={2} lg={2} xl={2}> <Button variant="text" color="secondary" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" prefix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" suffix="write" > lorem </Button> </Grid>
      <Grid className="p-4" col={6} md={3} lg={3} xl={2}> <Button variant="text" color="secondary" prefix="write" disabled > lorem </Button> </Grid>
    </Grid>

    <h1 className="mb-4">Card</h1>

    <div className="d-flex flex-wrap mb-4">
      <Card> hola mundo </Card>
      <Card selected> selected </Card>
      <Card onClick={() => alert('clicked')} > click me </Card>
      <Card border > hola mundo </Card>
    </div>

    <h1 className="mb-4">Checkbox</h1>

    <div className="d-flex">
      <div className="d-flex p-4 flex-column align-items-center">
        normal
        <Checkbox checked={checked} onChange={handleCheckbox} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        variant
        <Checkbox onChange={(value) => setSecondCheckbox(value)} variant={checked} checked={secondChecked} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled
        <Checkbox variant disabled={checked} />
      </div>
      <div className="d-flex p-4 flex-column align-items-center">
        disabled full
        <Checkbox variant={checked} checked={true} disabled />
      </div>
    </div>

  </div>

    <div className="container">
      <Grid row className="pb-6" >
        {
          [1, 2, 3, 4, 5].map((val) => <Grid key={val} col>
            <div className={`elevation-${val}`}>{val}</div>
          </Grid>)
        }
      </Grid>
      <Grid row className="pb-6" >
        {
          [1, 2, 3, 4].map((val) => <Grid key={val} col>
            <div className={`elevation-element-${val}`}>{val}</div>
          </Grid>)
        }
      </Grid>
    </div>


    <div className="bg-primary">
      <div className="container">
        <Header
          logo={<Logo className="w-100" />}
          logOut={<HeaderItem icon="line-logout"> label input </HeaderItem>}
        >
          <HeaderItem icon="home"> label input</HeaderItem>
          <HeaderItem icon="line-cloud"> label input</HeaderItem>
          <HeaderItem icon="home"> label input</HeaderItem>
          <HeaderItem icon="home"> label input</HeaderItem>
          <HeaderItem icon="home"> label input</HeaderItem>
        </Header>
      </div>
    </div>

    <div className="container my-4">
      {inputText}
      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        suffix={inputSuffix}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        error
        value={inputText}
        prefix={inputPrefix}
        suffix={inputSuffix}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        type="password"
        success
        prefix={inputPrefixText}
        suffix={inputSuffix}
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        type="password"
        disabled
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label de un text area"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        variant='textarea'
        onChange={({ target: { value } }) => setInputText(value)}
      />

      <Input
        maxLength="105"
        label="esto es un label de un text area"
        assistText="esto es un texto tal vez muy largo a ver que pasaria"
        value={inputText}
        disabled
        variant='textarea'
        onChange={({ target: { value } }) => setInputText(value)}
      />
    </div>

  </>
}

export default App
