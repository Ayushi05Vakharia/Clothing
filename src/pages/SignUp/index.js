import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { signInWithGoogle } from "../../firebase/firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center w-50">
        <div className="w-100">
          <div className="d-grid mb-3 ">
            <span className="fw-bolder">I already have an account</span>
            <span>SignIn with your email and password</span>
          </div>
          <div className="">
            <Form>
              <FormGroup>
                <Label className="mb-0 fw-bolder">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  className="pt-0 border-0 border-bottom"
                  onChange={handleOnChange}
                />
              </FormGroup>
              <FormGroup>
                <Label className="mb-0 fw-bolder">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  className="pt-0 border-0 border-bottom"
                  onChange={handleOnChange}
                />
              </FormGroup>
            </Form>
            <div className="d-flex justify-content-between">
              <Button outline color="info">
                SignIn
              </Button>
              <Button outline color="info" onClick={signInWithGoogle}>
                SignIn with Google
              </Button>
            </div>
          </div>
        </div>
        {/* <div>
          <span>SignIn with your email and password</span>
          <div className="bg-danger">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              className=" border-0 border-bottom"
              onChange={handleOnChange}
            />
            <Label>Passoword</Label>
            <Input
              type="password"
              name="password"
              value={password}
              className=" border-0 border-bottom"
              onChange={handleOnChange}
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
};

SignUp.propTypes = {};

export default SignUp;
