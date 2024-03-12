import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container-fluid dashboard__container clearfix">
    <div className="pf-pb-24">
      <div ents='["stores"]'>
        <div style={{ position: 'relative' }}>
          <div className="loading-overlay loading-overlay--alt" />
          <div>
            <div className="pf-cards my-stores">
              <h2 className="pf-h2 pf-my-40">Stores</h2>{' '}
              <a href="#">
                <div className="pf-border pf-cards__item pf-p-24 pf-mt-12 pf-pointer">
                  <div className="pf-d-flex pf-justify-content-between pf-w-100">
                    <div className="pf-position-relative">
                      <img
                        src="https://static.cdn.dropshippy.com/static/v767/images/integrations/shopify.svg"
                        alt="hello world1111"
                        className="store-logo pf-mr-16"
                      />{' '}
                      {/**/}
                    </div>{' '}
                    <div className="pf-d-flex pf-justify-content-between pf-flex-column pf-flex-sm-row pf-align-items-sm-center pf-w-100">
                      <div>
                        <h4 className="pf-h4 pf-m-0 pf-text-dark pf-d-sm-inline">
                          Your Store
                        </h4>{' '}
                        <span
                          className="pf-mt-2 pf-mt-sm-0 pf-ml-sm-8 store-status pf-badge pf-badge-small pf-badge--success"
                          itle
                          title
                        >
                          Active
                        </span>{' '}
                        {/**/}
                      </div>{' '}
                      <div className="pf-d-sm-flex">
                        <button
                          className="pf-btn pf-btn-secondary pf-w-100 pf-w-sm-auto pf-mt-16 pf-mt-sm-0 pf-mr-12"
                          type="button"
                        >
                          Add product
                        </button>{' '}
                        <button
                          className="pf-btn pf-btn-primary pf-w-100 pf-w-sm-auto pf-mt-12 pf-mt-sm-0"
                          type="button"
                        >
                          View store
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>{' '}
          </div>
          <div className="pf-mt-64 pf-mb-16">
            <h4 className="pf-h3 pf-m-0">
              To create a new store, choose your method
            </h4>{' '}
            <div className="pf-mt-24 pf-cards">
              {/**/}{' '}
              <div className="row pf-d-flex pf-flex-wrap pf-justify-content-center pf-ui-body">
                <div className="col-sm-6 col-lg-4 pf-d-flex">
                  <div className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24">
                    <div className="pf-bg-lighter pf-p-16 grow-1 shrink-0 basis-auto">
                      <div className="text-center pf-bold">
                        Choose your store's platform
                        <div className="pf-mt-24">
                          <img
                            src="https://files.cdn.dropshippy.com/upload/integration-comp/cb/cb14c4ed89b4523a1f8affb6ed7f3fa3_t?v=1590473065"
                            alt="Shopify"
                            height="36px"
                            className="pf-m-2 shopify-img"
                          />
                        </div>
                      </div>
                    </div>{' '}
                    <div className="pf-m-16">
                      <Link
                        to="/store/connect"
                        className="pf-btn pf-btn-primary pf-btn-block"
                      >
                        Choose platform
                      </Link>
                    </div>
                  </div>
                </div>{' '}
                <div className="col-sm-6 col-lg-4 pf-d-flex">
                  <div className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24">
                    <div className="pf-bg-lighter pf-p-16 grow-1 shrink-0 basis-auto">
                      <div className="text-center pf-bold">
                        Use OtherStore to connect to
                      </div>
                    </div>{' '}
                    <div className="pf-m-16">
                      <a
                        href="/dashboard/connect/shipstation"
                        className="pf-btn pf-btn-primary pf-btn-block"
                      >
                        Enter Store
                      </a>
                    </div>
                  </div>
                </div>{' '}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
