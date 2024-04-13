import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { CustomButton } from "../custom-button/custom-button.component";


export const PriceCheckout = (price) => {
  return (
    <StripeCheckout
      name="Three Comma Co." // the pop-in header title
      description="Big Data Stuff" // the pop-in header subtitle
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
      ComponentClass="div"
      panelLabel="Give Money" // prepended to the amount in the bottom pay button
      amount={price * 100} // cents
      currency="USD"
      stripeKey="pk_test_51MSa8RDRkExq0DG5KKv8R6L1ZnAGVTrQiGBtxTdNEZ8vgBUl9lCuhu5lnClE5A5HlQZVmGJAZCqgMSgxrqPuevkU00rzM9wbDq"
      locale="en"
      email="info@vidhub.co"
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress={false}
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      zipCode={false}
      allowRememberMe // "Remember Me" option (default true)
      token={() => alert("success")} // submit callback
      reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
    //   triggerEvent="onTouchTap"
    >
      <CustomButton >
        PAY NOW
      </CustomButton>
    </StripeCheckout>
  );
};










// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';


// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

//   const onToken = token => {
//     axios({
//       url: '/payment',
//       method: 'post',
//       data: {
//         amount: priceForStripe,
//         token: token
//       }
//     })
//       .then(response => {
//         alert('Succesful Payment!');
//       })
//       .catch(error => {
//         console.log('Payment Error: ', error);
//         alert(
//           'There was an issue with your payment! Please make sure to use the provided credit card data'
//         );
//       });
//   };

//   return (
//     <StripeCheckout
//       label='Pay Now'
//       name='CRWN Clothing Ltd.'
//       billingAddress
//       shippingAddress
//       image='https://svgshare.com/i/CUz.svg'
//       description={`Your total is $${price}`}
//       amount={priceForStripe}
//       panelLabel='Pay Now'
//       token={onToken}
//       stripeKey={publishableKey}
//     />
//   );
// };

// export default StripeCheckoutButton;
