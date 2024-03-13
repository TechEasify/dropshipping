import React, { useState } from 'react';
import {
   Modal, Backdrop, Fade,
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { NewOrders } from '../../../components';
import './Orders.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export function Orders() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="container-fluid dashboard__container clearfix">
        <img
          className="hidden-xs hidden-sm order-intro__arrow"
          alt="Intro arrow"
          src="https://static.cdn.printful.com/static/v767/images/layout/order-intro-arrow.png"
        />
        <div className="order-intro">
          <h2 className="pf-h2 pf-my-40">
            Orders
            <a
              className="pf-btn pf-btn-primary float-none float-xs-right pf-d-block pf-d-xs-inline-block pf-d-sm-none pf-mt-12 pf-mt-xs-0"
              id="orders-new-order"
            >
              New order
            </a>
          </h2>
          <div className="row margin-vertical-50">
            <div className="col-md-12 text-center">
              <h1 className="pf-m-0 container-header">Explore your Orders</h1>
              <h3 className="subheading regular pf-m-0 margin-top-10">
                Here you’ll be able to manage your orders and check their status
              </h3>
            </div>
          </div>
          <div className="row pf-mb-40">
            <div className="col-sm-10 offset-sm-1 text-center">
              <div className="pf-d-none pf-d-sm-block">
                <img
                  className='order-example'
                  alt="example"
                  style={{ maxWidth: '50%' }}
                  src="https://www.printful.com/static/images/layout/zero-state-illustration.svg"
                />
              </div>
              <div className="pf-d-block pf-d-sm-none">
                <img
                  alt="example"
                  style={{ maxWidth: '60%' }}
                  src="https://www.printful.com/static/images/layout/zero-state-illustration.svg"
                />
              </div>
              <div>
              <NewOrders />
              </div>
              <button
                type="button"
                onClick={handleOpen}
                className="pf-btn pf-btn-lg pf-btn-primary pf-ml-16"
                id="dashboard-new-order"
              >
                New order
              </button>
              <Modal
                open={open}
                className={classes.modal}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                // BackdropProps={{
                //   timeout: 500,
                // }}
              >
                <Fade in={open}>
                  <NewOrders Close={handleClose} />
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
