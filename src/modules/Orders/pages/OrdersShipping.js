/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetInfoShipping } from '../action';
import './Orders.scss';

const Step = () => (
  <div className="container order-container pf-mb-16 pf-mb-sm-0 pf-p-0 pf-py-sm-32 pf-px-sm-16">
    <div className="row">
      <div className="col-12 col-lg-8 offset-lg-2 offset-xl-3">
        <div id="5ef9c206c2b11">
          <ul className="pf-steps  dashboard__fullwidth">
            <div className="pf-steps-wrap ">
              <Link to="/orders/update" className="pf-steps__item ">
                <div className="pf-steps__item__inner">
                  <span className="pf-steps__item__step">1</span>
                  <span className="pf-steps__item__title">Products</span>
                </div>
              </Link>
              <a href="#" className="pf-steps__item pf-steps__item--done">
                <div className="pf-steps__item__inner">
                  <span className="pf-steps__item__step">2</span>
                  <span className="pf-steps__item__title">Shipping</span>
                </div>
              </a>
              <a href="#" className="pf-steps__item ">
                <div className="pf-steps__item__inner">
                  <span className="pf-steps__item__step">3</span>
                  <span className="pf-steps__item__title">Review Order</span>
                </div>
              </a>
            </div>
            <span className="nav-arrow left hidden">
              <i className="pf-i pf-i-chevron-left pf-i-24 pf-pt-0" />
            </span>
            <span className="nav-arrow right hidden">
              <i className="pf-i pf-i-chevron-right pf-i-24 pf-pt-0" />
            </span>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export function OrdersShipping() {
  const history = useHistory();

  // Info buyer
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    note: '',
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSetInfo = () => {
    dispatch(SetInfoShipping(state));
    history.push('/orders/review');
  };

  const country = [
    { name: 'Việt Nam', value: 'VN' },
    { name: 'Campuchia', value: 'CAM' },
  ];
  return (
    <>
      <div className="container-fluid dashboard__container clearfix">
        <Step />
        <div className="container order-container ">
          <div className="row">
            <div className="col-12">
              <div id="order-shipping">
                <div className="order-shipping">
                  <div className="white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-12">
                    <div className="row">
                      <div className=" no-gutters col-sm-6 col-xs-12">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col-sm-12 col-xs-12">
                            <div className="pf-form-group pf-mt-24 ">
                              <label
                                htmlFor="pf-form-input-1"
                                className="pf-h5"
                              >
                                Full Name
                              </label>
                              <input
                                required
                                type="text"
                                name="name"
                                onChange={handleChange}
                                className="pf-form-control form-control inspectletIgnore pf-ui-body"
                                id="pf-form-input-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order-5 order-flow-mobile-9 no-gutters col-sm-6 col-xs-12">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col-sm-12 col-xs-12">
                            <div className="form-group pf-mb-4 pf-mt-24">
                              <label className="pf-h5">
                                Phone
                                <span className="pf-pl-4">
                                  <span className="label-help-text cgray">
                                    Only used for delivery, not marketing
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="row phone-container">
                              <div className="col-4 phone-container__code">
                                <div className="pf-form-group ">
                                  <select
                                    data-no_results_text="No results match"
                                    name="phoneCountry"
                                    className="form-control"
                                    id="pf-form-input-10"
                                    style={{ display: 'none' }}
                                  />
                                  <div
                                    className="chosen-container chosen-container-single"
                                    style={{ width: '100%' }}
                                    id="pf_form_input_10_chosen"
                                  >
                                    <a className="chosen-single" tabIndex={-1}>
                                      <span>
                                        <span className="pf-mr-8 flag flag--sprite flag--sprite-vn" />
                                        +84
                                      </span>
                                      <div>
                                        <b />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="pf-form-group ">
                                  <input
                                    required
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                    className="pf-form-control form-control inspectletIgnore pf-ui-body"
                                    id="pf-form-input-11"
                                  />
                                  <div className="pf-custom-control-error-message pf-mt-4 pf-ui-caption" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order-2 order-flow-mobile-2 no-gutters col-sm-6 col-xs-12">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col-sm-12 col-xs-12">
                            <div className="pf-form-group pf-mt-24">
                              <label
                                htmlFor="pf-form-input-2"
                                className="pf-h5"
                              >
                                Address line 1
                              </label>
                              <input
                                required
                                type="text"
                                name="address"
                                onChange={handleChange}
                                className="pf-form-control form-control inspectletIgnore pf-ui-body"
                                id="pf-form-input-2"
                              />
                              <div className="pf-custom-control-error-message pf-mt-4 pf-ui-caption" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order-2 order-flow-mobile-2 no-gutters col-sm-6 col-xs-12">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col-sm-12 col-xs-12">
                            <div className="pf-form-group pf-mt-24">
                              <label
                                htmlFor="pf-form-input-5"
                                className="pf-h5"
                              >
                                Email
                              </label>
                              <input
                                required
                                type="text"
                                name="email"
                                onChange={handleChange}
                                className="pf-form-control form-control inspectletIgnore pf-ui-body"
                                id="pf-form-input-5"
                              />
                              <div className="pf-custom-control-error-message pf-mt-4 pf-ui-caption" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order-2 order-flow-mobile-2 no-gutters col-sm-6 col-xs-12">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col-sm-12 col-xs-12">
                            <div className="pf-form-group pf-mt-24">
                              <label className="pf-h5">Country</label>
                              <select
                                required
                                type="text"
                                name="country"
                                onChange={handleChange}
                                style={{ maxWidth: 300, border: '#000' }}
                                className="pf-form-control form-control inspectletIgnore pf-ui-body"
                                id="pf-form-input-2"
                              >
                                {country.map((item, i) => (
                                  <option key={i} value={item.value}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                              <div className="pf-custom-control-error-message pf-mt-4 pf-ui-caption" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="pf-form-group pf-mt-24">
                          <label htmlFor="pf-form-input-5" className="pf-h5">
                            Note
                          </label>
                          <textarea
                            style={{ minHeight: 150 }}
                            required
                            type="text"
                            name="note"
                            onChange={handleChange}
                            className="pf-form-control form-control inspectletIgnore pf-ui-body"
                            id="pf-form-input-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-12 ">
                    <div className="row">
                      <div className="col-xs-11 col-sm-8 col-md-6 col-lg-4 center-block">
                        <div>
                          <a
                            className="pf-btn pf-btn-primary pf-btn-lg pf-mt-8 pf-px-8 pf-btn-block order-flow__button"
                            onClick={handleSetInfo}
                          >
                            Continue to review
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
