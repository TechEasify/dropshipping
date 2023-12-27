import React, { useState, useEffect } from 'react';

import { getProfileUser } from '../../../routes/helper';

const defaultAllSteps = [
  { text: 'Sign up for DropShippy', status: true },
  { text: 'Confirm your email', status: false },
  { text: 'Create a product template', status: false },
];

export default function Dashboard() {
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   getProfileUser()
  //     .then((res) => setUser(res))
  //     .catch((err) => console.log(err));
  // });
  return (
    <div className="dashboard-home">
      <div>
        <div
          id="dashboard-disclaimer"
          tabIndex={-1}
          aria-labelledby="dashboard-disclaimer-label"
          aria-hidden="true"
          role="dialog"
          className="modal fade zoom"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close">
                  <span aria-hidden="true">×</span>{' '}
                  <span className="sr-only">Close</span>
                </button>{' '}
                <div>
                  <span className="pf-h3 pf-m-0">
                    Explore your dropshippy Dashboard
                  </span>
                </div>
              </div>{' '}
              <div className="modal-body ">
                <div className="pf-d-flex pf-flex-column pf-flex-sm-row pf-align-items-center">
                  {' '}
                  <p className="text-center text-sm-left pf-text-muted pf-ui-body pf-mb-0 pf-mt-24 pf-mt-sm-0 pf-ml-0 pf-ml-sm-24">
                    Your Dashboard might look a little different. That's because
                    it's been specially crafted to help you sell online. Check
                    out our useful shortcuts, tips &amp; tricks, and trending
                    products!
                  </p>
                </div>
              </div>{' '}
              <div className="modal-footer">
                <div className="text-left">
                  <button
                    type="button"
                    className="pf-btn pf-btn-primary pf-w-100 pf-w-sm-auto"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
        <div
          id="onboarding-disclaimer"
          tabIndex={-1}
          aria-labelledby="onboarding-disclaimer-label"
          aria-hidden="true"
          role="dialog"
          className="pf-pr-0 modal fade zoom"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close">
                  <span aria-hidden="true">×</span>{' '}
                  <span className="sr-only">Close</span>
                </button>{' '}
                <div>
                  <span className="pf-h3 pf-m-0 pf-pl-4 pf-d-block">
                    Let’s skip the Welcome Guide
                  </span>
                </div>
              </div>{' '}
              <div className="modal-body ">
                <div className="pf-d-flex pf-flex-column pf-flex-sm-row pf-align-items-center">
                  <p className="text-center text-sm-left pf-text-muted pf-ui-body pf-my-0 pf-mx-0">
                    It looks like you’ve been using dropshippy for a while now and
                    know the basics. Instead of the Welcome Guide, we’ll display
                    the newest and most relevant info for you.
                  </p>
                </div>
              </div>{' '}
              <div className="modal-footer">
                <div className="text-left">
                  <button
                    type="button"
                    className="pf-btn pf-btn-primary pf-w-100 pf-w-sm-auto"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
        {/**/}{' '}
        <h2 className="dashboard-home__welcome pf-h2 pf-m-0 pf-pl-16 pf-pl-md-0 pf-pt-32 inspectlet-sensitive">
          Welcome, {user.name}!
        </h2>{' '}
        <div className="dashboard-home__essential-steps pf-mb-40">
          <hr className="pf-border-top pf-my-24 pf-my-md-32" />{' '}
          <div className="row">
            <div className="col-md-3 pf-d-flex pf-justify-content-center">
              {/* <img
                src="https://www.dropshippy.com/static/images/dashboard/onboarding-left.svg"
                alt="Onboarding Illustration"
                className="pf-d-none pf-d-md-block"
                style={{ width: 165 }}
              /> */}
            </div>{' '}
            <div className="col-md-6">
              <h4 className="pf-h4 text-center pf-mt-0 pf-mb-24">
                Let's get you started. Your next steps are:
              </h4>{' '}
              <div className="pf-px-16 pf-border dashboard-home__essential-steps-list">
                {defaultAllSteps.map((item, index) => (
                  <div key={index}>
                    <a
                      href="#"
                      className="pf-py-16 pf-d-flex dashboard-home__onboarding-step--completed"
                      style={{ position: 'relative' }}
                    >
                      <i
                        className={`pf-mr-12 pf-i pf-i-24 pf-i-checkbox-marked-circle pf-text${
                          item.status ? '-green' : '-gray'
                        }`}
                      />{' '}
                      <div
                        className="pf-d-flex pf-flex-column"
                        style={{ flex: '1 1 0%' }}
                      >
                        <div className="pf-d-flex pf-justify-content-between">
                          <h4 className="pf-ui-body pf-m-0 pf-text-muted">
                            {item.text}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>{' '}
            <div className="col-md-3 pf-d-flex pf-justify-content-center">
              {/* <img
                src="https://www.dropshippy.com/static/images/dashboard/onboarding-right.svg"
                alt="Onboarding Illustration"
                className="pf-d-none pf-d-md-block"
                style={{ width: 165 }}
              /> */}
            </div>
          </div>
        </div>{' '}
        {/**/}
      </div>
    </div>
  );
}
