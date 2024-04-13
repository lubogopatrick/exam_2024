import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

// export default SignIn;

// import { useState } from "react";
// import "./sign-in.styles.scss";

// import { AppInput } from "../app-input/app-input.component";
// import { AppButton } from "../app-button/app-button.component";
// const defaultFormFields = {
//   Email: "",
//   Password: ""
// };

// export const SignIn = () => {
//   const [formFields, setformFields] = useState(defaultFormFields);
//   const { email, password } = formFields;
// // const resetFormFields=()=>{
// //   setformFields(defaultFormFields)
// // };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setformFields({ ...formFields, [name]: value });
//   };

//   return (
//     <div className='sign-in-container'>
//       <h2>Already have an account </h2>
//       <span className="title"> Sign in Please </span>
//       <form onSubmit={() => {}}>
//         <AppInput
//           label="Email"
//           type="email"
//           onChange={handleChange}
//           name="email"
//           required
//           value={email}
//          />

//         <AppInput
//           label="Password"
//           value={password}
//           type="password"
//           onChange={handleChange}
//           name="password"
//           required

//          />
//         <AppButton />
//         <button type="submit">Sign in</button>
//       </form>
//     </div>
//   );
// };
