import { Component } from "react";
import React from "react";
import { SignIn } from "../../components/sign-in/sign-in.component";
import {  SignUp } from "../../components";
import './authentication-page.styles.scss';
export class Authentication extends Component {
  render() {
    return (
      <div className="auth-page">
         <SignIn />
         <SignUp currentUser={this.props.currentUser} />
          </div>
    );
  }
}
