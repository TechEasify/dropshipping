import React, { useState, useEffect } from 'react';
import { useLocation, Redirect, Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {
  Template,
  CreateProductTemplate,
  ProductTemplateDetail,
} from 'modules/ProductTemplate/pages';

import { Register, Login, ForgotPwd } from 'modules/Authentication/pages';

import {
  User,
  Currency,
  Language,
  Notification,
  Footer,
} from 'components/index';

import { Dashboard } from 'modules/Dashboard/pages';
import { UploadFile } from 'modules/FileLibrary/pages';
import {
  Orders,
  OrdersUpdate,
  OrdersShipping,
  OrdersReview,
} from 'modules/Orders/pages';
import { Payments, Methods, Legal, AddMethods } from 'modules/Billing/pages';
import { MyAccount, Notifications } from 'modules/Settings/pages';
import { Default, Connect } from 'modules/Store/pages';
import { RenderRoutes, isLoggedIn } from './helper';
import { localStorageConstant } from '../constant';

const drawerWidth = 230;

const nav = [
  {
    text: 'My dropshippy',
    icon: 'pf-i pf-i-24 pf-i-chart-pie',
    isTree: false,
    treeItem: [],
    link: '',
  },
  {
    text: 'Orders',
    icon: 'pf-i pf-i-24 pf-i-format-list-bulleted',
    isTree: false,
    treeItem: [],
    link: '/orders',
  },
  {
    text: 'Product templates',
    icon: 'pf-i pf-i-24 pf-i-drawing-box',
    isTree: false,
    treeItem: [],
    link: '/template',
  },
  {
    text: 'File library',
    icon: 'pf-i pf-i-24 pf-i-folder-multiple-image',
    isTree: false,
    treeItem: [],
    link: '/library',
  },
  {
    text: 'Stores',
    icon: 'pf-i pf-i-24 pf-i-store',
    isTree: false,
    treeItem: [],
    link: '/store',
  },
  {
    text: 'Billing',
    icon: 'pf-i pf-i-24 pf-i-credit-card-outline',
    isTree: true,
    treeItem: [
      {
        text: 'Payments',
        link: '/billing/payments',
      },
      {
        text: 'Billing methods',
        link: '/billing/methods',
      },
      {
        text: 'Legal Info',
        link: '/billing/legal-info',
      },
    ],
    link: '/billing',
  },
  {
    text: 'Settings',
    icon: 'pf-i pf-i-24 pf-i-settings',
    isTree: true,
    treeItem: [
      {
        text: 'My account',
        link: '/settings/my-account',
      },
      {
        text: 'Notifications',
        link: '/settings/notifications',
      },
    ],
    link: '/settings',
  },
  {
    text: 'Help',
    icon: 'pf-i pf-i-24 pf-i-help-circle',
    isTree: false,
    treeItem: [],
    link: '',
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiPaper-elevation4': {
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '& .MuiDrawer-paper': {
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    maxWidth: '100vw',
  },

  drawerPaper: {
    width: drawerWidth,
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: 'white',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();
  const location = useLocation();
  const prefix = location.pathname.split('/')[1];
  const path = location.pathname.split('/')[2];
  const [expandBill, setExpandBill] = useState(false);
  const [expandSetting, setExpandSetting] = useState(false);

  useEffect(() => {
    setExpandBill(prefix === 'billing');
    setExpandSetting(prefix === 'settings');
  }, [prefix]);
  const drawer = (
    <div
      id="dashboard-sidebar"
      className="dashboard__sidebar pf-bg-white pf-ui-body"
      style={{ maxWidth: 230 }}
    >
      <ul
        className="pf-m-0 pf-px-0 pf-py-8"
        id="sidebar-ul"
        style={{ maxHeight: 400 }}
      >
        {nav.map((item) => (
          <div key={item.text}>
            {item.text !== 'Billing' && item.text !== 'Settings' && (
              <li className="panel" key={item.text}>
                <Link
                  className={clsx(
                    'pf-link-block pf-px-24 pf-py-8',
                    item.link === `/${prefix}` ? 'active' : ''
                  )}
                  style={{ cursor: 'pointer' }}
                  to={item.link}
                >
                  <span className={item.icon} style={{ paddingRight: 5 }} />
                  <span className="pf-ml-8">{item.text}</span>
                </Link>
              </li>
            )}

            {item.text === 'Billing' && (
              <>
                <li className="panel" key={item.text}>
                  <a
                    className={clsx(
                      'pf-link-block pf-px-24 pf-py-8',
                      item.link === `/${prefix}` ? 'active' : ''
                    )}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setExpandBill(!expandBill)}
                  >
                    <span className={item.icon} style={{ paddingRight: 5 }} />
                    <span className="pf-ml-8">{item.text}</span>
                    <div>
                      {!expandBill ? (
                        <span
                          className="float-right pf-px-24 pf-py-8 collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#sidebar-ul"
                          data-target="#sidebar-ul-5"
                          aria-expanded="false"
                        >
                          <i className="pf-i pf-i-18 pf-i-chevron-up" />
                        </span>
                      ) : (
                        <span
                          className="float-right pf-px-24 pf-py-8"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#sidebar-ul"
                          data-target="#sidebar-ul-5"
                          aria-expanded="true"
                        >
                          <i className="pf-i pf-i-18 pf-i-chevron-up" />
                        </span>
                      )}

                      {/*  */}
                    </div>
                  </a>
                </li>
                <ul
                  className={`pf-pl-24 pf-bg-white collapse ${
                    expandBill && 'in'
                  }`}
                  id="sidebar-ul-9"
                >
                  {item.treeItem.map((treeItem) => (
                    <li key={treeItem.text}>
                      <Link
                        className={`pf-link-block pf-px-24 pf-py-8 ${
                          treeItem.link === `/${prefix}/${path}` ? 'active' : ''
                        }`}
                        to={treeItem.link}
                        style={{ cursor: 'pointer' }}
                      >
                        <span>{treeItem.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {item.text === 'Settings' && (
              <>
                <li className="panel" key={item.text}>
                  <a
                    className={clsx(
                      'pf-link-block pf-px-24 pf-py-8',
                      item.link === `/${prefix}` ? 'active' : ''
                    )}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setExpandSetting(!expandSetting)}
                  >
                    <span className={item.icon} style={{ paddingRight: 5 }} />
                    <span className="pf-ml-8">{item.text}</span>
                    <div>
                      {!expandSetting ? (
                        <span
                          className="float-right pf-px-24 pf-py-8 collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#sidebar-ul"
                          data-target="#sidebar-ul-5"
                          aria-expanded="false"
                        >
                          <i className="pf-i pf-i-18 pf-i-chevron-up" />
                        </span>
                      ) : (
                        <span
                          className="float-right pf-px-24 pf-py-8"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#sidebar-ul"
                          data-target="#sidebar-ul-5"
                          aria-expanded="true"
                        >
                          <i className="pf-i pf-i-18 pf-i-chevron-up" />
                        </span>
                      )}

                      {/*  */}
                    </div>
                  </a>
                </li>
                <ul
                  className={`pf-pl-24 pf-bg-white collapse ${
                    expandSetting && 'in'
                  }`}
                  id="sidebar-ul-9"
                >
                  {item.treeItem.map((treeItem) => (
                    <li key={treeItem.text}>
                      <Link
                        className={`pf-link-block pf-px-24 pf-py-8 ${
                          treeItem.link === `/${prefix}/${path}` ? 'active' : ''
                        }`}
                        to={treeItem.link}
                        style={{ cursor: 'pointer' }}
                      >
                        <span>{treeItem.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </ul>
      <ul className="pf-m-0 pf-px-0 pf-py-8">
        <li className="panel">
          <a
            className="pf-link-block pf-px-24 pf-py-8  dashed-separator start-selling"
            href="/store"
            id=""
          >
            <span className="pf-i pf-i-24 pf-i-store" />
            <span className="pf-ml-8">Start selling</span>
          </a>
        </li>
      </ul>
      <br />
      <br />
      <hr className="pf-d-none" />
      {/* <ul className="pf-m-0 pf-px-0 pf-py-8 pf-border-top">
        <li>
          <a
            className="pf-link-block pf-text-muted pf-px-24 pf-py-8"
            href="#"
          >
            <span className="pf-i pf-i-24 pf-i-home" />
            <span className="pf-ml-8">Home page</span>
          </a>
        </li>
        <li>
          <a className="pf-link-block pf-text-muted pf-px-24 pf-py-8" href="#">
            <span className="pf-i pf-i-24 pf-i-tshirt-crew" />
            <span className="pf-ml-8">Product catalog</span>
          </a>
        </li>
      </ul> */}
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div
              id="dashboard-header"
              className="dashboard__header pf-bg-white pf-ui-body"
            >
              <div className="dashboard__menu">
                <div className="container-fluid">
                  <div className="row pf-position-relative">
                    <div className="col" style={{ position: 'unset' }}>
                      <div
                        id="sitewide-search-225d772b"
                        className="sitewide-search__user-bar pf-mt-12"
                      >
                        <div
                          id="sitewide-search"
                          className="pf-w-100 pf-py-8 pf-py-sm-12 pf-py-md-0"
                        >
                          <div className=" sitewide-search--closed">
                            <span className="pf-i pf-i-24 pf-i-magnify pf-position-absolute pf-mx-12 pf-my-8" />
                            <input
                              placeholder="Search products, services, articles, and more"
                              type="search"
                              id="sitewide-search-input"
                              name="sitewide-search-input"
                              autoComplete="off"
                              className=" pf-px-48"
                            />
                            <input
                              style={{
                                opacity: 0,
                                position: 'absolute',
                                left: 0,
                                zIndex: -1,
                              }}
                            />
                            <div className="pf-i pf-i-24 pf-i-close pf-position-absolute pf-px-12 pf-py-8" />
                          </div>
                        </div>
                      </div>{' '}
                    </div>

                    <div className="col-auto text-right">
                      <ul
                        id="userbar"
                        className="pf-p-0 pf-m-0 pf-d-inline-block"
                      >
                        <Language />
                        <Currency />
                        <Notification />
                        <User />

                        <li className="pf-d-inline-block">
                          <Link
                            className="pf-btn pf-btn-primary pf-ml-24 pf-mr-8 pf-mt-12"
                            id="dashboard-new-order"
                            to="/orders"
                          >
                            New order{' '}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Drawer
            variant="permanent"
            anchor="left"
            open
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => {
      const userLogInSuccess = isLoggedIn();
      return userLogInSuccess ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Login />
      );
    },
  },
  {
    path: '/auth',
    key: 'AUTH',
    component: RenderRoutes,
    routes: [
      {
        path: '/auth',
        key: 'AUTH_ROOT',
        exact: true,
        component: () => {
          const userLogInSuccess = isLoggedIn();
          return userLogInSuccess ? <Redirect to="/" /> : <Login />;
        },
      },
      {
        path: '/auth/login',
        key: 'AUTH_ROOT',
        exact: true,
        component: () => {
          const userLogInSuccess = isLoggedIn();
          return userLogInSuccess ? <Redirect to="/" /> : <Login />;
        },
      },
      {
        path: '/auth/register',
        key: 'AUTH_REGISTER',
        exact: true,
        component: () => {
          const userLogInSuccess = isLoggedIn();
          return userLogInSuccess ? <Redirect to="/" /> : <Register />;
        },
      },
      {
        path: '/auth/forgot',
        key: 'AUTH_RESETPWD',
        exact: true,
        component: () => {
          const userLogInSuccess = isLoggedIn();
          return userLogInSuccess ? <Redirect to="/" /> : <ForgotPwd />;
        },
      },
      {
        path: '/auth/logout',
        key: 'AUTH_LOGOUT',
        exact: true,
        component: () => {
          const removeItem = Object.values(localStorageConstant);
          removeItem.forEach((item) => localStorage.removeItem(item));

          return <Login />;
        },
      },
    ],
  },
  {
    path: '/template',
    key: 'TEMPLATE',
    component: (props) => {
      const isUserLogin = isLoggedIn();
      return isUserLogin ? <RenderRoutes {...props} /> : <Redirect to="/" />;
    },
    routes: [
      {
        path: '/template',
        key: 'TEMPLATE_ROOT',
        exact: true,
        component: () => (
          <Layout>
            <Template />
          </Layout>
        ),
      },
      {
        path: '/template/create',
        key: 'TEMPLATE_CREATE',
        exact: true,
        component: () => (
          <Layout>
            <CreateProductTemplate />
          </Layout>
        ),
      },
      {
        path: '/template/1',
        key: 'TEMPLATE_DETAIL',
        exact: true,
        component: () => (
          <Layout>
            <ProductTemplateDetail />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/library',
    key: 'LIBRARY',
    component: RenderRoutes,
    routes: [
      {
        path: '/library',
        key: 'LIBRARY_ROOT',
        exact: true,
        component: () => {
          const userLogInSuccess = isLoggedIn();
          return userLogInSuccess ? (
            <Layout>
              <UploadFile />
            </Layout>
          ) : (
            <Login />
          );
        },
      },
    ],
  },
  {
    path: '/orders',
    key: 'Orders',
    component: (props) => {
      const isUserLogin = isLoggedIn();
      return isUserLogin ? <RenderRoutes {...props} /> : <Redirect to="/" />;
    },
    routes: [
      {
        path: '/orders',
        key: 'ORDERS_ROOT',
        exact: true,
        component: () => (
          <Layout>
            <Orders />
          </Layout>
        ),
      },
      {
        path: '/orders/update',
        key: 'ORDERS_UPDATE',
        exact: true,
        component: () => (
          <Layout>
            <OrdersUpdate />
          </Layout>
        ),
      },
      {
        path: '/orders/shipping',
        key: 'ORDERS_SHIPPING',
        exact: true,
        component: () => (
          <Layout>
            <OrdersShipping />
          </Layout>
        ),
      },
      {
        path: '/orders/review',
        key: 'ORDERS_REVIEW',
        exact: true,
        component: () => (
          <Layout>
            <OrdersReview />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/billing',
    key: 'BILLING',
    component: (props) => {
      const isUserLogin = isLoggedIn();
      return isUserLogin ? <RenderRoutes {...props} /> : <Redirect to="/" />;
    },
    routes: [
      {
        path: '/billing',
        key: 'BILLING_ROOT',
        exact: true,
        component: () => <Redirect to="/billing/payments" />,
      },
      {
        path: '/billing/payments',
        key: 'BILLING_PAYMENTS',
        exact: true,
        component: () => (
          <Layout>
            <Payments />
          </Layout>
        ),
      },
      {
        path: '/billing/methods',
        key: 'BILLING_METHODS',
        exact: true,
        component: () => (
          <Layout>
            <Methods />
          </Layout>
        ),
      },
      {
        path: '/billing/legal-info',
        key: 'BILLING_LEGAL',
        exact: true,
        component: () => (
          <Layout>
            <Legal />
          </Layout>
        ),
      },
      {
        path: '/billing/methods/add',
        key: 'BILLING_LEGAL',
        exact: true,
        component: () => (
          <Layout>
            <AddMethods />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/settings',
    key: 'SETTINGS_ROOT',
    component: (props) => {
      const isUserLogin = isLoggedIn();
      return isUserLogin ? <RenderRoutes {...props} /> : <Redirect to="/" />;
    },
    routes: [
      {
        path: '/settings',
        key: 'SETTINGS',
        exact: true,
        component: () => <Redirect to="/settings/my-account" />,
      },
      {
        path: '/settings/my-account',
        key: 'SETTINGS_MY_ACCOUNT',
        exact: true,
        component: () => (
          <Layout>
            <MyAccount />
          </Layout>
        ),
      },
      {
        path: '/settings/notifications',
        key: 'SETTINGS_NOTIFICATIONS',
        exact: true,
        component: () => (
          <Layout>
            <Notifications />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/store',
    key: 'STORE',
    component: (props) => {
      const isUserLogin = isLoggedIn();
      return isUserLogin ? <RenderRoutes {...props} /> : <Redirect to="/" />;
    },
    routes: [
      {
        path: '/store',
        key: 'STORE_ROOT',
        exact: true,
        component: () => (
          <Layout>
            <Default />
          </Layout>
        ),
      },
      {
        path: '/store/connect',
        key: 'STORE_CONNECT',
        exact: true,
        component: () => (
          <Layout>
            {' '}
            <Connect />
          </Layout>
        ),
      },
    ],
  },
];

export { RenderRoutes };
export default ROUTES;
