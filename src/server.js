// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_dyyxU8R6IZB60xPeFHEGUKFh00nOu7MdLZ');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'dkk',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
  })
})();

