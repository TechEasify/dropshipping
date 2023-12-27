/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Products } from '../../../components/index';
import { CheckVoucher } from '../action';

export function OrdersReview() {
  const data = useSelector((state) => state.Orders);
  console.log(data);
  const [voucherInput, setVoucherInput] = useState('');
  const [voucher, setVoucher] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVoucher(voucherInput);
    }, 800);

    return () => clearTimeout(timeout);
  }, [voucherInput]);

  useEffect(() => {
    // CheckVoucher(voucher);
  }, [voucher]);

  return (
    <div className="container-fluid dashboard__container clearfix">
      <div className="headcrumbs pf-border-bottom pf-bg-white pf-ui-body dashboard__fullwidth">
        <div className="container">
          <div className="row pf-py-16 pf-align-items-center no-gutters">
            <div className="col-6 col-sm-4 col-md-3">
              <i className="pf-i pf-i-chevron-left pf-i-18 pf-text-gray" />
              <Link to="/orders" className="pf-link">
                <span>Back to all orders </span>
              </Link>
            </div>
            <div className="pf-d-none pf-d-sm-block col-sm-4 col-md-6 text-center">
              <div className="row text-center">
                <div className="col-12 col-md-4 pf-border-right pf-d-flex pf-align-items-md-center pf-justify-content-center pf-mt-8 order-info">
                  <span className="dropshippy-order-number " title={123}>
                    #123
                  </span>{' '}
                </div>
                <div className="col-12 col-md-4 pf-border-right pf-mt-8 order-info">
                  <img
                    className="order-info--logo pf-mr-4"
                    src="https://static.cdn.dropshippy.com/static/v767/images/integrations/personal-orders.svg"
                    alt="native"
                  />
                  <span>Personal orders</span>
                </div>
                <div className="col-12 col-md-4 pf-d-flex pf-align-items-md-center pf-justify-content-center pf-mt-8 order-info">
                  Jun 18 2020 08:34 PM{' '}
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-right" />
          </div>
          <hr className="pf-m-0 pf-d-sm-none" />
          <div className="row pf-d-block pf-d-sm-none pf-py-16 text-center">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <span className="dropshippy-order-number " title={123}>
                    #123
                  </span>{' '}
                </div>
                <div className="col-12 pf-mt-8">
                  <img
                    className="order-info--logo pf-mr-4"
                    src="https://static.cdn.dropshippy.com/static/v767/images/integrations/personal-orders.svg"
                    alt="native"
                  />
                  <span>Personal orders</span>
                </div>
                <div className="col-12 pf-mt-8">Jun 18 2020, 8:34pm </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container order-container pf-mb-16 pf-mb-sm-0 pf-p-0 pf-py-sm-32 pf-px-sm-16">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 offset-xl-3">
            <div id="5eec324521249">
              <ul className="pf-steps  dashboard__fullwidth">
                <div className="pf-steps-wrap ">
                  <Link to="/orders/update" className="pf-steps__item ">
                    <div className="pf-steps__item__inner">
                      <span className="pf-steps__item__step">1</span>
                      <span className="pf-steps__item__title">Products</span>
                    </div>
                  </Link>
                  <Link to="/orders/shipping" className="pf-steps__item ">
                    <div className="pf-steps__item__inner">
                      <span className="pf-steps__item__step">2</span>
                      <span className="pf-steps__item__title">Shipping</span>
                    </div>
                  </Link>
                  <a href="#" className="pf-steps__item pf-steps__item--done">
                    <div className="pf-steps__item__inner">
                      <span className="pf-steps__item__step">3</span>
                      <span className="pf-steps__item__title">
                        Review Order
                      </span>
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
      <div className="container order-container order-review  ">
        <div className="row">
          <div className="col-12">
            <div
              data-vue-root="fjfGhooHeVCx84j0"
              data-vue-components='["order-review-items"]'
            >
              <div className="row no-gutters">
                <div className="col-12">
                  <div className="col-12 hidden-sm hidden-md hidden-lg">
                    <h4 className="pf-ml-12 pf-mt-24 pf-mb-16 pf-mr-8 inline">
                      Order items
                    </h4>{' '}
                    <a href="/orders/update" className="pf-link">
                      Edit
                    </a>
                  </div>
                </div>{' '}
                <div className="col-12 white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-12">
                  <div className="row">
                    <div className="col-12 hidden-xs">
                      <h4 className="pf-mt-0 pf-mb-16 pf-mr-8 inline">
                        Order items
                      </h4>{' '}
                      <a href="/orders/update" className="pf-link">
                        Edit
                      </a>
                    </div>{' '}
                    <div className="col-md-12">
                      <div id="review-order-items">
                        <div>
                          <table className="table order-item-table">
                            <thead>
                              <tr>
                                <th className="pf-pb-12">
                                  Product{' '}
                                  <span className="glyphicon glyphicon-info-sign" />
                                </th>
                                <th className="pf-pb-12"> </th>
                                <th className="pf-pb-12">Print file </th>
                                <th className="pf-pb-12">Qty</th>
                                <th className="pf-pb-12">
                                  Price{' '}
                                  <span className="glyphicon glyphicon-info-sign" />
                                </th>
                                <th className="pf-pb-12">
                                  Retail{' '}
                                  <span className="glyphicon glyphicon-info-sign" />
                                </th>
                                <th className="pf-pb-12"> </th>
                              </tr>
                            </thead>
                            <tbody>
                              <Products />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-12">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="pf-h3 pf-mt-0 pf-mb-16">Shipping</h4>
                </div>{' '}
                <div className="col-md-4">
                  <h4 className="pf-h5 pf-mt-0">
                    Shipping from
                    {/**/}
                  </h4>{' '}
                  <div className="pf-mb-24 pf-mb-md-0">
                    <div className="shipped-from">
                      {/**/}{' '}
                      <div className="shipped-from__branch margin-bottom-10">
                        <span className="pf-mr-4 pf-badge pf-badge-location pf-badge--eu">
                          VN
                        </span>{' '}
                        <span> Shop address</span> {/**/}
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div className="col-md-4">
                  <h4 className="pf-h5 pf-mt-0 pf-mb-16 pf-mr-8 inline">
                    Shipping to
                  </h4>{' '}
                  <Link to="/orders/shipping" className="pf-link">
                    Edit
                  </Link>{' '}
                  <p className="pf-mb-24 pf-mb-md-0 inspectlet-sensitive">
                    <span>Buyer Address</span>
                    <br />
                    <span>VietNam</span>
                    <br />
                    <span>Ho Chi Minh, </span>
                    <br />
                    <span>Vietnam</span>
                    <br />
                    <span>+84364240255</span>
                  </p>
                </div>{' '}
                <div className="col-md-4">
                  <h4 className="pf-h5 pf-mt-0 pf-mb-16 pf-mr-0 inline">
                    Shipping method
                  </h4>{' '}
                  <Link to="/orders/shipping" className="pf-link">
                    Edit
                  </Link>{' '}
                  <p className="pf-mb-0">Buyer Shipping method</p>
                </div>
              </div>{' '}
            </div>
            <form id="orderCreate">
              <div
                className="white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-12"
                id="coupon-code"
              >
                {' '}
                <div>
                  {' '}
                  <div className="form-group row pf-mb-4">
                    <div className="col-md-8">
                      <label className="pf-mb-8">Discount Code</label>
                      <div>
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              type="text"
                              placeholder="Discount code"
                              maxLength={85}
                              value={voucherInput}
                              onChange={(e) => setVoucherInput(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{' '}
                  <div className="row">
                    <div className="col-md-4 pf-ui-caption pf-text-red pf-text-red" />
                  </div>
                </div>
              </div>{' '}
            </form>
            <div className="white-block pf-px-12 pf-py-24 pf-p-sm-32 pf-mb-64">
              <div id="covid-banner-anchor" />
              <div className="row">
                <div className="col-xs-11 col-sm-8 col-md-6 col-lg-4 center-block">
                  <div
                    className="row no-gutters pf-mb-16"
                    style={{ position: 'relative' }}
                  >
                    <div className="loading-overlay loading-overlay--alt" />
                    <div className="row no-gutters">
                      <div className="col-12">
                        <h3 className="pf-h3 pf-mb-16">Order breakdown</h3>
                      </div>
                    </div>{' '}
                    <div className="row no-gutters">
                      <div className="row no-gutters">
                        <div className="col-12">
                          <div>
                            <div className="pf-mb-16">
                              <div className="pf-border-bottom accordion pf-border pf-border-light pf-mb-16">
                                <div
                                  data-toggle="collapse"
                                  data-target=".accordion__header:hover + .accordion__content"
                                  className="accordion__header"
                                >
                                  <div className="row no-gutters pf-d-flex pf-justify-content-between pf-py-8 pf-pl-8 pf-pr-12">
                                    {' '}
                                    <div className="col pf-d-flex pf-justify-content-between pf-align-items-center pf-ml-2">
                                      <div className="pf-h5">Fulfillment</div>{' '}
                                      <div className="pf-d-flex pf-align-items-center">
                                        {/**/}{' '}
                                        <div className="pf-ml-8 pf-h5">
                                          $12.27
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{' '}
                                <div
                                  aria-hidden="true"
                                  className="collapse accordion__content"
                                >
                                  <div className="row no-gutters">
                                    <div>
                                      <div>
                                        <div className="row no-gutters">
                                          <div className="col-12 pf-bg-lighter">
                                            <div className="row no-gutters">
                                              <div className="col-12 pf-h5 pf-pt-8 pf-pb-8 pf-pl-12 pf-pt-16 pf-pl-12">
                                                Fulfilled in Europe
                                              </div>{' '}
                                              <div className="col-12 pf-mb-12">
                                                <div className="col-12 pf-d-flex pf-justify-content-between pf-ui-body text-muted  pf-pl-24 pf-pr-12">
                                                  <div className="pf-pr-8">
                                                    Products and fulfillment
                                                  </div>{' '}
                                                  <div className="text-nowrap">
                                                    $12.27
                                                  </div>
                                                </div>
                                              </div>{' '}
                                              {/**/} {/**/} {/**/} {/**/} {/**/}{' '}
                                              {/**/}
                                            </div>
                                          </div>{' '}
                                          <div className="col-12 text-right pf-h5 text-muted pf-pr-12 pf-py-8">
                                            $12.27
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{' '}
                          {/**/} {/**/}{' '}
                          <div className="col-12 pf-d-flex pf-justify-content-between pf-ui-body pf-pb-16 pf-h5 pf-p-0">
                            <div className="pf-pr-8">Shipping</div>{' '}
                            <div className="text-nowrap">+$5.99</div>
                          </div>{' '}
                          {/**/} {/**/} {/**/}
                        </div>
                      </div>
                    </div>{' '}
                    <div className="row no-gutters">
                      <div className="col-12 pf-border-top">
                        <div className="row">
                          <div className="col-12 pf-d-flex pf-justify-content-between">
                            <h3 className="pf-h3 pf-mt-16 pf-mb-8">Total</h3>{' '}
                            <h3 className="pf-h3 pf-mt-16 pf-mb-8">$18.26</h3>
                          </div>{' '}
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    id="create-order"
                    className="pf-btn pf-btn-primary pf-btn-block pf-btn-lg pf-px-8 order-flow__button"
                    href=""
                    style={{ maxWidth: 250 }}
                  >
                    <i className="pf-i pf-i-lock pf-i-18 pf-mb-4 order-review__lock-icon" />
                    Submit your order
                  </a>
                  <div className="pf-mt-24 pf-text-muted">
                    By completing this order,
                    <br />I agree to dropshippy's{' '}
                    <a
                      className="pf-link"
                      href="/policies/terms-of-service"
                      target="_blank"
                    >
                      Terms of Service
                    </a>
                    .{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
