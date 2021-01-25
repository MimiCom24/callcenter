import React from "react";
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";

function Login({ user: { userName, mobileNumber }, setUser }) {
  function populteFields(event) {
    setUser((draft) => {
      draft[event.name] = event.target.value;
    });
  }
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign="center">
          Login in to your account
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="username"
              value={userName}
              onChange={(event) => populteFields(event)}
            ></Form.Input>
            <Form.Input
              fluid
              icon="mobile alternate"
              iconPosition="left"
              placeholder="mobile number"
              value={mobileNumber}
              onChange={(event) => populteFields(event)}
            ></Form.Input>
            <Button color="red" fluid size="large">
              Login/Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
