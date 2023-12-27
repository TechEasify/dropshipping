import React, { useState } from 'react';
import { CreditCard, BillingAddress } from '../../../components';

const CreditTab = (props) => (
  <div className="inspectlet-sensitive col-sm-12 pf-mt-16">
    <div class-name="clearfix">
      <div className="row">
        <div className="col-xs-12 col-sm-7 col-lg-6 order-2">
          <div className="credit-card-form">
            <div className="row">
              <div className="col-12 pf-d-none pf-d-sm-block">
                <div className="pf-p-0">
                  <div className="pf-h5">We accept:</div>
                  <div className="pf-mb-16 pf-mt-12">
                    <div className="pf-d-flex pf-flex-row pf-flex-wrap">
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--visa-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--master-card-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--maestro-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--american-express-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--cartes-bancaires-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--diners-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--jcb-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--union-pay-light" />
                      <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--discover-light" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group pf-mb-24">
                  <label className="control-label pf-h5 pf-mb-8">
                    Card number
                  </label>
                  <fieldset className="credit-card-form__card-number">
                    <input
                      type="text"
                      name="number"
                      style={{ border: 'none', fontSize: 20 }}
                      onChange={props.handleChange}
                      value={props.number}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group pf-d-inline-block pf-mr-40">
                  <label className="control-label pf-h5 pf-mb-8">
                    Expiry date
                  </label>
                  <input
                    type="text"
                    name="ex_month"
                    id="number"
                    style={{ border: 'none', maxWidth: 60 }}
                    onChange={props.handleChange}
                    value={props.ex_month}
                  />
                  <input
                    type="text"
                    name="ex_year"
                    style={{ border: 'none', maxWidth: 60 }}
                    onChange={props.handleChange}
                    value={props.ex_year}
                  />
                </div>
                <div className="form-group pf-d-inline-block pf-mr-16 align-top">
                  <div className="pf-d-inline-block">
                    <label className="control-label pf-h5 pf-mb-8">
                      CVV code
                    </label>
                    <div className="pf-d-inline-flex credit-card-form__ccv-code--line">
                      <input
                        type="text"
                        name="cvc"
                        style={{ border: 'none', maxWidth: 80 }}
                        onChange={props.handleChange}
                        value={props.cvc}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pf-mt-16 credit-card-form__encryption">
                <div className="credit-card-form__encryption__padlock" />
                <div className="credit-card-form__encryption__description pf-ui-body">
                  We do not store your card details. We use industry-standard
                  encryption to protect your personal information.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5 col-lg-6 order-1 order-sm-6">
          <div className="col-12 pf-d-sm-none pf-p-0">
            <div className="pf-p-0">
              <div className="pf-h5">We accept:</div>
              <div className="pf-mb-16 pf-mt-12">
                <div className="pf-d-flex pf-flex-row pf-flex-wrap">
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--visa-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--master-card-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--maestro-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--american-express-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--cartes-bancaires-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--diners-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--jcb-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--union-pay-light" />
                  <div className="billing-method__method-icon billing-method__method-icon__card-list-icon billing-method--discover-light" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 pf-py-4 pf-px-0">
            <div className="interactive-credit-card">
              {/* Component Credit Card */}
              <CreditCard />
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" name="txvariant" defaultValue="card" />
      <div
        tabIndex={-1}
        aria-labelledby="null-label"
        aria-hidden="true"
        role="dialog"
        className="modal fade zoom"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <div className="pf-h3">Card Verification Value (CVV)</div>
            </div>
            <div className="modal-body">
              <div>
                <div className="pf-ui-body">
                  <p className="pf-h5 pf-mt-4 pf-mb-8">
                    This is a security code that's printed on your credit card.
                  </p>
                  <p className="text-muted pf-mb-8">
                    For Visa, Mastercard, and Discover cards it's a 3-digit
                    number on the back of the card. American Express cards have
                    a 4-digit number on the front.
                  </p>
                </div>
                <div
                  className="pf-mb-4"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="/static/images/layout/visa-security-number.svg"
                    width={273}
                    height={150}
                    alt="CVV"
                    className="img-responsive pf-mt-24 pf-d-inline-block"
                  />
                  <img
                    src="/static/images/layout/ae-security-number.svg"
                    width={273}
                    height={150}
                    alt="CVV"
                    className="img-responsive pf-mt-24 pf-d-inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const PaypalTab = () => (
  <div className="col-md-12 pf-pt-16 pf-pl-0 credit-card-form--paypal">
    <div id="paypalButton">
      <div
        id="braintree-paypal-loggedin"
        style={{
          display: 'none',
          maxWidth: 500,
          overflow: 'hidden',
          padding: 16,
          backgroundImage:
            'url("https://checkout.paypal.com/pwpp/2.15.7/images/paypal-small.svg"), none',
          backgroundPosition: '20px 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '13px 15px',
          borderTop: '1px solid rgb(209, 212, 214)',
          borderBottom: '1px solid rgb(209, 212, 214)',
        }}
      >
        <span
          id="bt-pp-name"
          style={{
            color: 'rgb(40, 48, 54)',
            fontSize: 13,
            fontWeight: 800,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            marginLeft: 36,
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          PayPal
        </span>
        <span
          id="bt-pp-email"
          style={{
            color: 'rgb(110, 120, 127)',
            fontSize: 13,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            marginLeft: 5,
            WebkitFontSmoothing: 'antialiased',
          }}
        />
        <button
          type="button"
          id="bt-pp-cancel"
          style={{
            color: 'rgb(61, 149, 206)',
            fontSize: 11,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lineHeight: 20,
            margin: '0px 0px 0px 25px',
            padding: 0,
            backgroundColor: 'transparent',
            border: 0,
            cursor: 'pointer',
            textDecoration: 'underline',
            float: 'right',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Cancel
        </button>
      </div>
      <div id="braintree-paypal-loggedout">
        <a
          id="braintree-paypal-button"
          href="#"
          style={{
            display: 'block',
            width: 115,
            height: 44,
            overflow: 'hidden',
          }}
        >
          <img
            src="https://checkout.paypal.com/pwpp/2.15.7/images/pay-with-paypal.png"
            alt="Pay with PayPal"
            style={{
              maxWidth: '100%',
              display: 'block',
              width: '100%',
              height: '100%',
              outline: 'none',
              border: 0,
            }}
          />
        </a>
      </div>
    </div>
    <p className="text-muted pf-mt-8 pf-mb-0">
      This will redirect you to PayPal
    </p>
  </div>
);
export default () => {
  const [paypalTab, setPaypalTab] = useState(false);
  const [credit, setCredit] = useState({
    number: '',
    ex_month: '',
    ex_year: '',
    cvc: '',
  });
  const [key, setKey] = useState(null);
  document.onkeydown = () => {
    setKey(window.event);
  };

  const [info, setInfo] = useState({
    name: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    zip_code: '',
    company: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name } = event.target;
    if ((key.keyCode >= 49 && key.keyCode <= 57) || key.key === 'Backspace') {
      if (
        name === 'ex_month' &&
        (credit.ex_month.length < 2 || key.key === 'Backspace')
      ) {
        setCredit({
          ...credit,
          ex_month: event.target.value,
        });
      } else if (
        name === 'ex_year' &&
        (credit.ex_year.length < 2 || key.key === 'Backspace')
      ) {
        setCredit({
          ...credit,
          ex_year: event.target.value,
        });
      } else if (
        name === 'cvc' &&
        (credit.cvc.length < 3 || key.key === 'Backspace')
      ) {
        setCredit({
          ...credit,
          cvc: event.target.value,
        });
      }
      if (
        name === 'number' &&
        (credit.number.length < 19 || key.key === 'Backspace')
      ) {
        if (
          (credit.number.length === 3 ||
            credit.number.length === 8 ||
            credit.number.length === 13) &&
          key.key !== 'Backspace'
        ) {
          setCredit({
            ...credit,
            [name]: `${event.target.value} `,
          });
        } else {
          setCredit({
            ...credit,
            [name]: event.target.value,
          });
        }
      }
    }
  };
  return (
    <div className="container-fluid dashboard__container clearfix">
      <div className="billing">
        <h2 className="pf-h2 pf-my-40">Billing: Add new billing method</h2>
        <div className="row">
          <div className="pf-d-none">
            <div
              className="sidebar__component"
              url-prefix="/dashboard/billing/"
            >
              <div className="row">
                <div className="col-12">
                  <div className="navbar-header visible-xs">
                    <button
                      type="button"
                      data-toggle="collapse"
                      data-target="#side-menu-collapse"
                      className="navbar-toggle collapsed"
                    >
                      Payments
                      <span className="arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-xs-12">
                <form id="addNewBillingMethod">
                  <div className="row pf-mt-16">
                    <div className="col-sm-12">
                      <div>
                        <ul
                          className="pf-tabs primary mobile"
                          id="payment-tabs"
                          style={{ top: 0 }}
                        >
                          <div className="tab-wrap">
                            <li className={`tab ${!paypalTab && 'active'}`}>
                              <a
                                href="#"
                                onClick={() => {
                                  setPaypalTab(false);
                                }}
                              >
                                <span
                                  className="pf-d-inline-block pf-py-16 pf-px-24 pf-mr-12 billing-method--credit-card hidden-sm hidden-md hidden-lg"
                                  style={{ verticalAlign: 'middle' }}
                                />
                                Card
                                <input
                                  type="radio"
                                  name="billing-method"
                                  className="hidden-sm hidden-md hidden-lg pull-right pf-mt-8"
                                />
                              </a>
                            </li>
                            <li className={`tab ${paypalTab && 'active'}`}>
                              <a href="#" onClick={() => setPaypalTab(true)}>
                                <span
                                  className="pf-d-inline-block pf-py-16 pf-px-24 pf-mr-12 billing-method--paypal hidden-sm hidden-md hidden-lg"
                                  style={{ verticalAlign: 'middle' }}
                                />
                                PayPal
                                <input
                                  type="radio"
                                  name="billing-method"
                                  className="hidden-sm hidden-md hidden-lg pull-right pf-mt-8"
                                />
                              </a>
                            </li>
                          </div>
                        </ul>
                        <div className="row">
                          <h4 className="pf-mt-16 pf-mb-0 col-sm-12">
                            Billing method information
                          </h4>

                          {paypalTab ? (
                            <PaypalTab />
                          ) : (
                            <CreditTab
                              number={credit.number}
                              ex_month={credit.ex_month}
                              ex_year={credit.ex_year}
                              cvc={credit.cvc}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                        <div className="payment_component__existing_cards">
                          <div has-eur-beta-access="true">
                            <div>
                              <div className="row">
                                <BillingAddress
                                  onChange={(e) => {
                                    const { name } = e.target;
                                    setInfo({
                                      ...info,
                                      [name]: e.target.value,
                                    });
                                    console.log(info);
                                  }}
                                  name={info.name}
                                  address1={info.address1}
                                  address2={info.address2}
                                  city={info.city}
                                  country={info.country}
                                  zip_code={info.zip_code}
                                  company={info.company}
                                  phone={info.phone}
                                />
                              </div>
                              <button
                                type="button"
                                className="button pf-btn pf-btn-primary pf-my-16"
                                onClick={() => {
                                  console.log(info);
                                  if (!paypalTab) {
                                    console.log(credit);
                                  }
                                }}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
