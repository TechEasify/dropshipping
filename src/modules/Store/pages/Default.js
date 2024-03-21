import React from 'react';
import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  Badge,
} from '@shopify/polaris';
import { Link, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin/store';
  const orders = [
    {
      id: '1020',
      order: '#1020',
      date: 'Jul 20 at 4:34pm',
      customer: 'Jaydon Stanton',
      total: '$969.44',
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: '1019',
      order: '#1019',
      date: 'Jul 20 at 3:46pm',
      customer: 'Ruben Westerfelt',
      total: '$701.19',
      paymentStatus: <Badge progress="partiallyComplete">Partially paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: '1018',
      order: '#1018',
      date: 'Jul 20 at 3.44pm',
      customer: 'Leo Carder',
      total: '$798.24',
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    (
      { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{date}</IndexTable.Cell>
        <IndexTable.Cell>{customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{paymentStatus}</IndexTable.Cell>
        <IndexTable.Cell>{fulfillmentStatus}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  return (
    <div className="container-fluid dashboard__container clearfix">
      <div className="pf-pb-24">
        <div ents='["stores"]'>
          <div style={{ position: 'relative' }}>
            <div className="loading-overlay loading-overlay--alt" />
            <div>
              <div className="pf-cards my-stores">
                <h2 className="pf-h2 pf-my-40">Stores</h2>
                <a href="#">
                  <div className="pf-border pf-cards__item pf-p-24 pf-mt-12 pf-pointer">
                    <div className="pf-d-flex pf-justify-content-between pf-w-100">
                      <div className="pf-position-relative">
                        <img
                          src="https://static.cdn.dropshippy.com/static/v767/images/integrations/shopify.svg"
                          alt="hello world1111"
                          className="store-logo pf-mr-16"
                        />
                      </div>
                      <div className="pf-d-flex pf-justify-content-between pf-flex-column pf-flex-sm-row pf-align-items-sm-center pf-w-100">
                        <div>
                          <h4 className="pf-h4 pf-m-0 pf-text-dark pf-d-sm-inline">
                            Your Store
                          </h4>
                          <span
                            className="pf-mt-2 pf-mt-sm-0 pf-ml-sm-8 store-status pf-badge pf-badge-small pf-badge--success"
                            itle
                            title
                          >
                            Active
                          </span>
                        </div>
                        <div className="pf-d-sm-flex">
                          <button
                            className="pf-btn pf-btn-secondary pf-w-100 pf-w-sm-auto pf-mt-16 pf-mt-sm-0 pf-mr-12"
                            type="button"
                          >
                            Add product
                          </button>
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
              </div>
            </div>

            {
              isAdminPath ?
                <>
                  <div className="pf-mt-64 pf-mb-16">
                    <LegacyCard>
                      <IndexTable
                        resourceName={resourceName}
                        itemCount={orders.length}
                        selectedItemsCount={
                          allResourcesSelected ? 'All' : selectedResources.length
                        }
                        onSelectionChange={handleSelectionChange}
                        headings={[
                          { title: 'Order' },
                          { title: 'Date' },
                          { title: 'Customer' },
                          { title: 'Total', alignment: 'end' },
                          { title: 'Payment status' },
                          { title: 'Fulfillment status' },
                        ]}
                      >
                        {rowMarkup}
                      </IndexTable>
                    </LegacyCard>
                  </div>
                </>
                :


                <div className="pf-mt-64 pf-mb-16">
                  <h4 className="pf-h3 pf-m-0">
                    To create a new store, choose your method
                  </h4>
                  <div className="pf-mt-24 pf-cards">
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
                          </div>
                          <div className="pf-m-16">
                            <Link
                              to="/store/connect"
                              className="pf-btn pf-btn-primary pf-btn-block"
                            >
                              Choose platform
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4 pf-d-flex">
                        <div className="pf-d-flex pf-flex-column pf-cards__item pf-border pf-pointer pf-w-100 pf-mt-24">
                          <div className="pf-bg-lighter pf-p-16 grow-1 shrink-0 basis-auto">
                            <div className="text-center pf-bold">
                              Use OtherStore to connect to
                            </div>
                          </div>
                          <div className="pf-m-16">
                            <a
                              href="/dashboard/connect/shipstation"
                              className="pf-btn pf-btn-primary pf-btn-block"
                            >
                              Enter Store
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
};
