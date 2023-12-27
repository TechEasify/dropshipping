import React from 'react';
import { useHistory } from 'react-router-dom';

export function NewOrders(props) {
  const history = useHistory();
  return (
    <div className="modal-dialog modal-md">
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div className="modal-header" style={{ paddingTop: 35 }}>
            <div className="pf-d-flex pf-flex-wrap pf-justify-content-between pf-align-items-center">
              <div className="order-1 basis-md-auto basis-80">
                <h4 className="pf-h3 pf-m-0">Start new order</h4>
              </div>
              <div className="order-3 text-right basis-md-auto basis-20" onClick={props.Close}>
                <span className="pf-i pf-i-32 pf-i-close pf-modal__close-icon" />
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="order-type-picker">
              {/* <h6 className="pf-mt-0 pf-mb-24">Select type</h6> */}
              <div className="row row-flex row-flex--center">
                <div className="col-md-6">
                  <div className="row no-gutters pf-px-16 pf-border pf-d-flex pf-flex-wrap text-center order-type-picker-panel order-type-picker-panel--basic pf-py-24">
                    <div className="col-12">
                      <img src="https://www.printful.com/static/images/layout/orders/box.svg?v=2" />
                    </div>
                    <div className="col-12">
                      <h3 className="pf-m-0 pf-h3">Basic order</h3>
                    </div>
                    <div className="col-12 pf-mt-12 ">
                      <span>
                        <span>Customize any of our 234 products</span>
                      </span>
                    </div>
                    <div onClick={() => { history.push('/orders/update'); }}>
                      <a
                        href="#"
                        className="pf-mt-24 pf-btn pf-btn-block pf-btn-primary pf-align-self-end"
                      >
                        Create your order
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pf-mt-24 pf-mt-md-0 col-md-6">
                  <div className="row no-gutters pf-px-16 pf-border pf-d-flex pf-flex-wrap text-center pf-py-16 order-type-picker-panel--sample order-type-picker-panel--disabled pf-bg-lighter pf-border-0 ">
                    <div className="col-12">
                      <img src="https://www.printful.com/static/images/layout/orders/price-tag-disabled.svg" />
                    </div>
                    <div className="col-12">
                      <h3 className="pf-m-0 pf-h4 pf-text-muted">Sample order</h3>
                    </div>
                    <div className="col-12 pf-mt-12 pf-text-muted">
                      <div>
                        <h3 className="pf-h3 text-muted pf-mt-0">
                          Temporarily disabled
                        </h3>
                        <div>
                          We're temporarily disabling discounts on sample orders.
                          This is to help our fulfillment teams prioritize regular
                          orders and keep up with increased demand.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer pf-d-none" />
        </div>
      </div>
    </div>
  );
}
