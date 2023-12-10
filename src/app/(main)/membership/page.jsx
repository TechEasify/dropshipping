"use client";
import { Button } from "primereact/button";
import React from "react";

const Membership = () => {
  return (
    <div className='card'>
      <h5 className='text-900 font-bold text-3xl mb-4 text-center'>
        Pricing Plans
      </h5>

      <div className='grid'>
        <div className='col-12 lg:col-4'>
          <div className='p-3 h-full'>
            <div
              className='shadow-2 p-3 h-full flex flex-column'
              style={{ borderRadius: "6px" }}
            >
              <div className='text-900 font-medium text-xl mb-2'>Free</div>
              <div className='text-600'>Base Plan</div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <div className='flex align-items-center'>
                <span className='font-bold text-2xl text-900'>$0</span>
                <span className='ml-2 font-medium text-600'>
                  / Month (Free)
                </span>
              </div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <ul className='list-none p-0 m-0 flex-grow-1'>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>100+ Product Catalogue</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Up to 60-70% Off All Products</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Order Samples</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>
                    Order Digital Services (Logo/Labels/Images/Packaging
                    Designing)
                  </span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Email/Chat Support for App Installation</span>
                </li>
              </ul>
              <hr className='mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto' />
              <Button label='Buy Now' className='p-3 w-full mt-auto' />
            </div>
          </div>
        </div>

        <div className='col-12 lg:col-4'>
          <div className='p-3 h-full'>
            <div
              className='shadow-2 p-3 h-full flex flex-column'
              style={{ borderRadius: "6px" }}
            >
              <div className='text-900 font-medium text-xl mb-2'>Starter</div>
              <div className='text-600'>Free Plan+</div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <div className='flex align-items-center'>
                <span className='font-bold text-2xl text-900'>$29.99</span>
                <span className='ml-2 font-medium text-600'>/ Month</span>
              </div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <ul className='list-none p-0 m-0 flex-grow-1'>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>10 Unique Products</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Unlimited Orders</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Personalized Product Branding</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Branded Invoicing and Packaging Slips</span>
                </li>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Custom Branded Tracking Page</span>
                </li>
              </ul>
              <hr className='mb-3 mx-0 border-top-1 border-bottom-none border-300' />
              <Button label='Buy Now' className='p-3 w-full' />
            </div>
          </div>
        </div>

        <div className='col-12 lg:col-4'>
          <div className='p-3 h-full'>
            <div
              className='shadow-2 p-3 flex flex-column'
              style={{ borderRadius: "6px" }}
            >
              <div className='text-900 font-medium text-xl mb-2'>Growth</div>
              <div className='text-600'>Starter Plan+</div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <div className='flex align-items-center'>
                <span className='font-bold text-2xl text-900'>$59.99</span>
                <span className='ml-2 font-medium text-600'>/ Month</span>
              </div>
              <hr className='my-3 mx-0 border-top-1 border-bottom-none border-300' />
              <ul className='list-none p-0 m-0 flex-grow-1'>
                <li className='flex align-items-center mb-3'>
                  <i className='pi pi-check-circle text-green-500 mr-2'></i>
                  <span>Unlimited Products</span>
                </li>
              </ul>
              <hr className='mb-3 mx-0 border-top-1 border-bottom-none border-300' />
              <Button
                label='Buy Now'
                className='p-3 w-full p-button-outlined'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
