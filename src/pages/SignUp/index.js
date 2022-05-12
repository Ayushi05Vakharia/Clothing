import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { auth, createUserProfileDocument, signInWithGoogle } from "../../firebase/firebase";

import PropTypes from "prop-types";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      console.log("user", user, displayName);
      await createUserProfileDocument(user, { displayName });
      // setPassword("");
      // setdisplayName("");
      // setEmail("");
      // setconfirmPassword("");
    } catch (error) {
      alert("Error msg 111 : ", error);
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <Col className="">
          <div className="d-grid mb-3 ">
            <span className="fw-bolder">I already have an account</span>
            <span>SignIn with your email and password</span>
          </div>

          <Form>
            <FormGroup>
              <Label className="mb-0 fw-bolder mt-3">Email</Label>
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
          <div className="d-flex justify-content-between mt-5">
            <Button color="dark">SignIn</Button>
            <Button color="info" onClick={signInWithGoogle}>
              SignIn with Google
            </Button>
          </div>
        </Col>

        <Col className="w-50">
          <div className="d-grid mb-3 ">
            <span className="fw-bolder">I do not have an account</span>
            <span>SignIn with your email and password</span>
          </div>

          <Form>
            <FormGroup>
              <Label className="mb-0 fw-bolder mt-3">Dsiplay Name</Label>
              <Input
                type="text"
                name="name"
                value={displayName}
                className="pt-0 border-0 border-bottom"
                onChange={(e) => setdisplayName(e.target.value)}
              />
            </FormGroup>
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
            <FormGroup>
              <Label className="mb-0 fw-bolder">Confirm Password</Label>
              <Input
                type="password"
                name="password"
                value={confirmPassword}
                className="pt-0 border-0 border-bottom"
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </FormGroup>
          </Form>
          <div className="d-flex justify-content-between mt-5">
            <Button color="dark" onClick={handleSignUp}>
              SignUp
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

SignUp.propTypes = {};

export default SignUp;
