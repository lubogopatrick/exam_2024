import React from "react";

export class Test extends React.Component {
  state = {
    show: true,
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          toggle: {this.state.show ? "show" : "hide"}
        </button>
        {this.state.show && this.props.currentUser && <div>Current User :   {this.props.currentUser.displayName}</div>}
      </div>
    );
  }
}
// import { Component } from 'react';

// const firstArr = [
//   { id: 1, name: 'Abdullah'},

// ]
// const secondArr = [
//   { id: 1, name: 'Usama'},

// ]

// export class Test extends Component {

//   state = {
//     change: true,
//     result: '',
//     entry1: '',
//     entry2: ''
//   }

//   handleChange = (event) => {
//     this.setState({change: !this.state.change})
//   }

//   render() {
//     const { change } = this.state

//     return(
//       <div>
//         <div>
//           <button onClick={this.handleChange}>Change</button>
//         </div>

//         <ul>
//           {
//             change ?
//             firstArr.map((e) => <li key={e.id}>{e.name}</li>)
//             :
//             secondArr.map((e) => <li key={e.id}>{e.name}</li>)
//           }
//         </ul>

//       </div>
//     )
//   }
// }
