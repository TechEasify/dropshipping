import React from 'react';
import { useHistory } from 'react-router-dom';

import { ProductItem } from 'components/index';

export default function Template() {
  const history = useHistory();

  const items = [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
    <ProductItem key={item} />
  ));

  return (
    <>
      <div className="product-templates">
        <div className="product-templates-dashboard-page pf-mt-24" style={{ position: 'relative' }}>
          <div className="product-templates-dashboard-page__header pf-d-flex pf-flex-column pf-align-items-stretch pf-flex-xs-row pf-align-items-xs-center pf-justify-content-xs-between pf-mb-40">
            <div className="product-templates-dashboard-page__title"><h2 className="pf-h2 pf-mb-0">Product templates</h2></div>
            <div className="product-templates-dashboard-page__top-button">
              <a className="pf-btn pf-btn-secondary pf-btn-block" onClick={() => history.push('/template/create')} href="#">
                New template
              </a>
            </div>
          </div>

          <div className="product-templates-dashboard-page__main-area">
            <div className="product-templates-toolbar">
              <div className="product-templates-toolbar__main-container pf-align-items-center row">
                <div className="product-templates-toolbar__select-all order-last order-sm-0 pf-mt-16 pf-mt-sm-0 clearfix col-sm-2 col-lg-3">
                  <label className="pf-m-0 pf-ui-body float-left float-sm-none">
                    <input type="checkbox" className="pf-ui-body" />
                    <span className="pf-ml-4">
                      Select All
                    </span>
                  </label>
                </div>

                <div className="product-templates-toolbar__other-items col-sm-10 col-lg-9">
                  <div className="product-templates-filter row no-gutters">
                    <div className="product-templates-filter__search col-sm-5 col-md-6 pf-mb-12 pf-mb-sm-0"><input type="text" placeholder="Search" className="search" /></div>
                    <div className="product-templates-filter__secondary-filters col-sm-7 col-md-6 pf-pl-sm-12 pf-d-flex pf-justify-content-between">
                      <div className="product-templates-filter__sort-by styled-select grow-1">
                        <select className="form-control">
                          <optgroup label="Select a sort order">
                            <option value="CREATED_DATE_DESC">
                              Created: newest first
                            </option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="product-templates-filter__view-types pf-font-size-none">
                        <a className="pf-btn pf-btn-outline pf-btn-square pf-ml-12 disabled"><i className="pf-i pf-i-view-grid pf-i-24" /></a>
                        <a className="pf-btn pf-btn-outline pf-btn-square pf-ml-12"><i className="pf-i pf-i-view-list pf-i-24" /></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pf-mt-8 pf-border-bottom" />
            </div>

            <div className="product-templates-items-viewport pf-my-24">
              <div className="product-templates-container product-templates-grid row">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
