import React from "react";
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";

function Login({
  user: { userName, mobileNumber, verifacationCode, verifacationSent },
  setUser,
  sendSmsCode,
  sendCode,
}) {
  function populteFields(event, data) {
    setUser((draft) => {
      draft[data.name] = data.value;
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
              defaultValue={userName}
              onChange={(event, data) => {
                populteFields(event, data);
              }}
              name="userName"
            ></Form.Input>
            <Form.Input
              fluid
              icon="mobile alternate"
              iconPosition="left"
              placeholder="mobile number"
              defaultValue={mobileNumber}
              onChange={(event, data) => {
                populteFields(event, data);
              }}
              name="mobileNumber"
            ></Form.Input>
            {verifacationSent && (
              <Form.Input
                fluid
                icon="key"
                iconPosition="left"
                placeholder="enter your code"
                defaultValue={verifacationCode}
                onChange={(event, data) => {
                  populteFields(event, data);
                }}
                name="verifacationCode"
              ></Form.Input>
            )}

            <Button
              color="red"
              fluid
              size="large"
              onClick={!verifacationSent ? sendSmsCode : sendCode}
            >
              {!verifacationSent ? "Login/Sign Up" : "Enter Your Code"}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
