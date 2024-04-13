import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';
import { CartIcon } from '../cart-icon/cart-icon.component';
import CartDropdown  from '../cart-dropdown/cart-dropdown.component';


import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';
import { connect } from 'react-redux';

const HeaderComponent = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/checkout'>
      checkout book
      </Link>
      <Link className='option' to='/shop'>
        SHOP BOOK
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/authentication'>
          SIGN IN
        </Link>
      )}
      { <CartIcon /> }
      {hidden ? null : <CartDropdown />}
    </div>
    
    
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});



export const Header = connect(mapStateToProps)(HeaderComponent);

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });

// export default connect(mapStateToProps)(Header);

// import React from "react";
// import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
// import { auth } from "../firebase/firebase.utils";

// import "./header.styles.scss";

// export const Header = ({ currentUser, hidden }) => (
//   <div className="header">
//     <Link className="logo-container" to="/">
//       <Logo className="logo" />
//     </Link>
//     <div className="options">
//       <Link className="option" to="/shop">
//         SHOP
//       </Link>
//       <Link className="option" to="/contact">
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <div className="option" onClick={() => auth.signOut()}>
//           SIGN OUT
//         </div>
//       ) : (
//         <Link className="option" to="/authentication">
//           SIGN IN
//         </Link>
//       )}
//       {/* <CartIcon /> */}
//     </div>
//     {/* {hidden ? null : <CartDropdown />} */}
//   </div>
// );


