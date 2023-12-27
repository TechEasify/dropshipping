"use client";
import React, { useState, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { PickList } from "primereact/picklist";
import { OrderList } from "primereact/orderlist";
import { ProductService } from "../../../demo/service/ProductService";
import { CollectionService } from "../../../demo/service/CollectionService";
import { InputText } from "primereact/inputtext";
import getConfig from "next/config";
import { Carousel } from "primereact/carousel";
import demoImg from "../../../../public/demo/images/product/game-controller.jpg";
import Image from "next/image";

const Stores = () => {
  return (
    <div className='grid list-demo'>
      <div className='col-12'>
        <div className='card'>
          <h5 className='text-center'>Pick a platform for your store</h5>
          <div className='flex justify-content-center gap-5 my-7'>
            <div className='card m-0 p-0 overflow-hidden shadow-1'>
              <Image src={demoImg} className='shadow-2 mx-0 w-full' />
              <div className='p-3'>
                <Button label='Shopify' className='w-full align-self-end' />
              </div>
            </div>
            <div className='card m-0 p-0 overflow-hidden shadow-1'>
              <Image src={demoImg} className='shadow-2 mx-0 w-full' />
              <div className='p-3'>
                <Button label='Other' className='w-full align-self-end' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
