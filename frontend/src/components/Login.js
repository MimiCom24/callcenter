import React from "react";
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
function Login() {
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
            ></Form.Input>
            <Form.Input
              fluid
              icon="mobile alternate"
              iconPosition="left"
              placeholder="mobile number"
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
