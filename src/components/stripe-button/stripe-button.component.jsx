import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KHQ91FfRHEWEydDJukOs6ouyKQ9mgx5lDCYOC4IvrgJsSy6BwGJWQw9XwDP1IP7Yq2Zt6UsQ6yhJzbTYCAX8dtK00vlc1ELAc';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce App Ltd.'
      billingAddress
      shippingAddress
      //   image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
