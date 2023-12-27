import React from 'react';

export default function ProductTemplateDetail() {
  return (
    <>
      <div className="container-fluid dashboard__container clearfix">


        <div data-vue-root="3HDAIKCluxzpMPAF" data-vue-components="[&quot;router-view&quot;]">
          <div className="product-templates">
            <div className="product-templates-view-page pf-my-24 pf-ui-body" indexfilter="[object Object]" style={{ position: 'relative' }}>
              <div className="loading-overlay loading-overlay--alt" />
              <div className="product-templates-view-header pf-d-sm-flex pf-align-items-center pf-justify-content-between">
                <div className="product-templates-view-header__breadcrumbs">
                  <ul className="pf-breadcrumbs pf-p-0">
                    <li><a href="/dashboard/product-templates?sortBy=created&amp;sortDir=desc&amp;page=1">Product templates</a></li>
                    <li><span>Essential Oil</span></li>
                    {' '}
                    <span className="nav-arrow left hidden" />
                    {' '}
                    <span className="nav-arrow right hidden" />
                  </ul>
                </div>
                {' '}
                <div className="product-templates-view-header__actions pf-my-16 pf-my-sm-8 pf-d-flex">
                  {/* <a className="pf-link-block pf-pointer pf-justify-items-center pf-mr-12">
                    <i className="pf-i pf-i-content-copy pf-i-24 pf-text-gray" />
                    {' '}
                    <span className="pf-link">Duplicate</span>
                  </a> */}
                  {' '}
                  <a className="pf-link-block pf-pointer pf-justify-items-center">
                    <i className="pf-i pf-i-delete pf-i-24 pf-text-gray" />
                    {' '}
                    <span className="pf-link">Delete</span>
                  </a>
                </div>
              </div>
              {' '}
              <div className="product-templates-view-page__content">
                <div className="product-templates-view-page__title pf-mb-32"><span className="pf-h2">Essential Oil</span></div>
                {' '}
                <div className="product-templates-view-page__main row">
                  <div className="product-templates-view-page__image col-sm-6 col-md-5 col-lg-4">
                    <div
                      className="product-templates-view-image__container"
                      style={{
                        width: '100%', height: 280, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundImage: 'url("https://files.cdn.dropshippy.com/upload/product-templates/75/753d8fcd6cd4d8708a0540d244aee3de_t")',
                      }}
                    />
                    {' '}
                    <div className="product-templates-view-image__actions pf-mt-16">
                      <a className="pf-link-block pf-pointer pf-justify-items-center pf-mr-12">
                        <i className="pf-i pf-i-pencil pf-i-24 pf-text-gray" />
                        {' '}
                        <span className="pf-link">Edit product template</span>
                      </a>
                    </div>
                  </div>
                  {' '}
                  <div className="product-templates-view-page__details col-sm-6 col-md-7 col-lg-8">
                    <div className="pf-pl-md-16">
                      <div className="product-template-detail-item product-template-detail-item--product pf-mb-24">
                        <div className="pf-h5">Product</div>
                        {' '}
                        <div className="pf-text-muted">Essential Oil 10Ml</div>
                        {' '}
                        <a className="pf-link pf-pointer">
                          See product info
                        </a>
                      </div>
                      {' '}
                      <div className="product-template-detail-item product-template-detail-item--price pf-mb-24">
                        <div className="pf-h5">Price</div>
                        {' '}
                        <div className="pf-text-muted">
                          $12.95
                        </div>
                      </div>
                      {' '}
                      <div className="product-template-detail-item product-template-detail-item--technique pf-mb-24">
                        <div className="pf-h5">Stock</div>
                        {' '}
                        <div className="pf-text-muted">
                          120
                        </div>
                      </div>
                      {' '}
                      <div className="product-template-detail-item product-template-detail-item--print-files pf-mb-24">
                        <div className="pf-h5">Shipping Price</div>
                        {' '}
                        <span className="product-template-placements-output">
                          <span className="product-template-placements-output__main pf-font-size-none">
                            <a className="pf-ui-body pf-text-muted pf-pointer" data-original-title="" title="">$5</a>
                            {' '}
                          </span>
                          {' '}
                          <span className="product-template-placements-output__templates pf-d-none">
                            <div id="placement-popover-2-4924698-front">
                              <div className="pf-text-dark">
                                <div className="pf-bold pf-mb-8">$5</div>
                              </div>
                            </div>
                          </span>
                        </span>
                      </div>
                      {' '}
                      <div className="product-template-details__actions">
                        <a className="pf-btn pf-btn-primary pf-d-block pf-d-sm-inline-block pf-mb-12 pf-mr-sm-8 disabled" data-original-title="" title="">
                          Add to store
                        </a>
                        {' '}
                        <a className="pf-btn pf-btn-secondary pf-d-block pf-d-sm-inline-block">
                          Make an order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="product-templates-modals" />
          </div>
        </div>
        {' '}

      </div>
    </>
  );
}
