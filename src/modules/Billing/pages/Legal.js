import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Legal() {
  const [active, setActive] = useState(false);
  const [state, setState] = useState({
    name: '',
    status: '',
    address1: '',
    postal_code: '',
    city: '',
    address2: '',
  });
  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className="container-fluid dashboard__container clearfix">
      <div className="billing">
        <h2 className="pf-h2 pf-my-40">Billing: Legal Info</h2>
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
          </div>{' '}
          <div className="col-sm-12">
            {/**/} {/**/}{' '}
            <div className="billing__legal-info" style={{}}>
              <p className="billing__description pf-mb-24 pf-mt-8">
                Here you can add or update your legal information. We will use
                these details on all your invoices that you can find under{' '}
                <Link to="/billing/payments" className="pf-link">
                  Billing → Payments.
                </Link>
              </p>{' '}
              <div>
                <div className="row" style={{ display: 'none' }}>
                  <div className="form-group pf-mb-24 col-xs-12">
                    <div className="pf-ui-body">
                      <div
                        className="pf-d-inline-block pf-link--pointer"
                        style={{ cursor: 'pointer' }}
                      >
                        <input
                          type="radio"
                          className="pf-mr-4"
                          defaultValue={-1}
                        />
                        <span className="pf-mr-16">Add manually</span>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div className="row">
                  <div className=" no-gutters col-sm-6 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label
                            htmlFor="fullName"
                            className="control-label pf-h5"
                          >
                            Full name
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            id="fullName"
                            name="name"
                            disabled={!active}
                            maxLength={35}
                            className="form-control inspectletIgnore"
                          />
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 no-gutters col-sm-6 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label className="control-label pf-h5">Status</label>
                          <div className="pf-ui-body">
                            <div className="pf-d-inline-block">
                              <input
                                onChange={handleChange}
                                disabled={!active}
                                type="radio"
                                name="status"
                                defaultValue="business"
                                className="pf-mr-4"
                              />
                              <span className="pf-mr-24">
                                Registered business
                              </span>
                            </div>
                            <div className="pf-d-inline-block">
                              <input
                                disabled={!active}
                                onChange={handleChange}
                                type="radio"
                                name="status"
                                defaultValue="personal"
                                className="pf-mr-4"
                              />
                              <span className="pf-mr-24">An individual</span>
                            </div>
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-4 no-gutters col-sm-6 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label
                            htmlFor="address1"
                            className="control-label pf-h5"
                          >
                            Address line 1
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            id="address1"
                            name="address1"
                            disabled={!active}
                            maxLength={80}
                            className="form-control inspectletIgnore"
                          />
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-5 no-gutters col-sm-6 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label
                            htmlFor="address2"
                            className="control-label pf-h5"
                          >
                            Address line 2 (optional)
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            id="address2"
                            name="address2"
                            disabled={!active}
                            maxLength={35}
                            className="form-control inspectletIgnore"
                          />
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-7 no-gutters col-sm-3 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label htmlFor="zip" className="control-label pf-h5">
                            ZIP/Postal code
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            id="zip"
                            name="postal_code"
                            disabled={!active}
                            maxLength={32}
                            className="form-control inspectletIgnore"
                          />
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-8 no-gutters col-sm-3 col-xs-12">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group pf-mb-24">
                          <label htmlFor="city" className="control-label pf-h5">
                            City
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            id="city"
                            name="city"
                            disabled={!active}
                            maxLength={32}
                            className="form-control inspectletIgnore"
                          />
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                </div>{' '}
                {/**/}
              </div>{' '}
              <div className="row">
                {!active ? (
                  <div className="col-xs-12">
                    <div className="form-group pf-mt-8 pf-mb-0">
                      {/**/}
                      <input
                        type="button"
                        onClick={() => {
                          setActive(true);
                          console.log(active);
                        }}
                        defaultValue="Edit"
                        className="pf-btn pf-btn-secondary"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="col-xs-12">
                    <div className="form-group pf-mt-8 pf-mb-0">
                      <div>
                        <input
                          type="button"
                          onClick={() => console.log(state)}
                          defaultValue="Save"
                          className=" pf-mr-12 pf-btn pf-btn-primary"
                        />{' '}
                        <input
                          type="button"
                          onClick={() => setActive(false)}
                          defaultValue="Cancel"
                          className="pf-btn pf-btn-secondary"
                        />
                      </div>{' '}
                      {/**/}
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="billing-history__toggle pf-py-24 pf-mt-32">
                <a
                  data-toggle="collapse"
                  data-target="#legal-history"
                  role="button"
                  aria-expanded="true"
                  className="pf-p-0"
                >
                  <span className="arrow" />
                  <h4 className="pf-h4 pf-my-0 pf-d-inline-block">
                    Legal info changes
                  </h4>
                </a>
              </div> */}
              {/* <div
                id="legal-history"
                className="collapse in"
                aria-expanded="true"
                style={{}}
              >
                <div className="billing-history pf-mb-24" style={{}}>
                  <div className="row">
                    <div className="col-xs-12 table-container">
                      <div id="js--history-table-container" className="history">
                        <div
                          id="DataTables_Table_5_wrapper"
                          className="dataTables_wrapper no-footer"
                        >
                          <div
                            className="DTFC_ScrollWrapper"
                            style={{
                              position: 'relative',
                              clear: 'both',
                              height: 165,
                            }}
                          >
                            <div
                              className="DTFC_LeftWrapper"
                              style={{ position: 'absolute', top: 0, left: 0 }}
                              aria-hidden="true"
                            >
                              <div
                                className="DTFC_LeftHeadWrapper"
                                style={{
                                  position: 'relative',
                                  top: 0,
                                  left: 0,
                                  overflow: 'hidden',
                                }}
                              />
                              <div
                                className="DTFC_LeftBodyWrapper"
                                style={{
                                  position: 'relative',
                                  top: 0,
                                  left: 0,
                                  overflow: 'hidden',
                                }}
                              >
                                <div
                                  className="DTFC_LeftBodyLiner"
                                  style={{
                                    position: 'relative',
                                    top: 0,
                                    left: 0,
                                    overflowY: 'scroll',
                                  }}
                                />
                              </div>
                              <div
                                className="DTFC_LeftFootWrapper"
                                style={{
                                  position: 'relative',
                                  top: 0,
                                  left: 0,
                                  overflow: 'hidden',
                                }}
                              />
                            </div>
                            <div
                              className="DTFC_RightWrapper"
                              style={{ position: 'absolute', top: 0, right: 0 }}
                              aria-hidden="true"
                            >
                              <div
                                className="DTFC_RightHeadWrapper"
                                style={{ position: 'relative', top: 0, left: 0 }}
                              >
                                <div
                                  className="DTFC_RightHeadBlocker DTFC_Blocker"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                  }}
                                />
                              </div>
                              <div
                                className="DTFC_RightBodyWrapper"
                                style={{
                                  position: 'relative',
                                  top: 0,
                                  left: 0,
                                  overflow: 'hidden',
                                }}
                              >
                                <div
                                  className="DTFC_RightBodyLiner"
                                  style={{
                                    position: 'relative',
                                    top: 0,
                                    left: 0,
                                    overflowY: 'scroll',
                                  }}
                                />
                              </div>
                              <div
                                className="DTFC_RightFootWrapper"
                                style={{ position: 'relative', top: 0, left: 0 }}
                              >
                                <div
                                  className="DTFC_RightFootBlocker DTFC_Blocker"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="dataTables_scroll">
                              <div
                                className="dataTables_scrollHead"
                                style={{
                                  overflow: 'hidden',
                                  position: 'relative',
                                  border: 0,
                                  width: '100%',
                                }}
                              >
                                <div
                                  className="dataTables_scrollHeadInner"
                                  style={{
                                    boxSizing: 'content-box',
                                    width: 1118,
                                    paddingRight: 0,
                                  }}
                                >
                                  <table
                                    className="row-border nowrap no-footer dataTable"
                                    style={{ width: 1118, marginLeft: 0 }}
                                    role="grid"
                                  >
                                    <thead>
                                      <tr role="row">
                                        <th
                                          className="sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: 478 }}
                                        >
                                          Applied legal info
                                        </th>
                                        <th
                                          className="sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: 356 }}
                                        >
                                          Changed by
                                        </th>
                                        <th
                                          className="sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: 188 }}
                                        >
                                          Date
                                        </th>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="dataTables_scrollBody"
                                style={{
                                  position: 'relative',
                                  overflow: 'auto',
                                  width: '100%',
                                }}
                              >
                                <table
                                  className="row-border nowrap no-footer dataTable"
                                  style={{ width: '100%' }}
                                  id="DataTables_Table_5"
                                  role="grid"
                                >
                                  <thead>
                                    <tr role="row" style={{ height: 0 }}>
                                      <th
                                        className="sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: 478,
                                          paddingTop: 0,
                                          paddingBottom: 0,
                                          borderTopWidth: 0,
                                          borderBottomWidth: 0,
                                          height: 0,
                                        }}
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: 0,
                                            overflow: 'hidden',
                                          }}
                                        >
                                          Applied legal info
                                        </div>
                                      </th>
                                      <th
                                        className="sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: 356,
                                          paddingTop: 0,
                                          paddingBottom: 0,
                                          borderTopWidth: 0,
                                          borderBottomWidth: 0,
                                          height: 0,
                                        }}
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: 0,
                                            overflow: 'hidden',
                                          }}
                                        >
                                          Changed by
                                        </div>
                                      </th>
                                      <th
                                        className="sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: 188,
                                          paddingTop: 0,
                                          paddingBottom: 0,
                                          borderTopWidth: 0,
                                          borderBottomWidth: 0,
                                          height: 0,
                                        }}
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: 0,
                                            overflow: 'hidden',
                                          }}
                                        >
                                          Date
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="odd">
                                      <td
                                        valign="top"
                                        colSpan={3}
                                        className="dataTables_empty"
                                      >
                                        No legal info changes yet
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="pf-border-bottom pf-mb-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
