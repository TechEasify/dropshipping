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

const SelectProducts = () => {
  const listValue = [
    { name: "San Francisco", code: "SF" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
    { name: "Istanbul", code: "IST" },
    { name: "Berlin", code: "BRL" },
    { name: "Barcelona", code: "BRC" },
    { name: "Rome", code: "RM" },
  ];

  const [picklistSourceValue, setPicklistSourceValue] = useState(listValue);
  const [picklistTargetValue, setPicklistTargetValue] = useState([]);
  const [orderlistValue, setOrderlistValue] = useState(listValue);
  const [dataViewValue, setDataViewValue] = useState(null);
  const [carouselViewValue, setCarouselViewValue] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [collectionFilterValue, setCollectionFilterValue] = useState("");
  const [filteredValue, setFilteredValue] = useState(null);
  const [layout, setLayout] = useState("grid");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const carouselResponsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const carouselItemTemplate = (collection) => {
    return (
      <div
        className='border-1 surface-border border-round m-1 text-center py-3'
        onClick={() => onCollectionFilter(collection)}
      >
        <div className='mb-3'>
          <img
            src={collection.collection_image}
            alt={collection.collection_name}
            className='w-6 shadow-2'
          />
        </div>
        <div>
          <p className='text-xl p-mb-1'>{collection.collection_name}</p>
        </div>
      </div>
    );
  };
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts().then((data) => setDataViewValue(data.data));
    const collectionService = new CollectionService();
    setCarouselViewValue([
      {
        collection_id: "0",
        collection_slug: "",
        collection_name: "ALL",
        collection_image:
          "https://shopifyapp.iihtsrt.com/public/assets/uploads/collection/avatar_1.png",
        tags: [],
      },
    ]);
    collectionService
      .getCollections()
      .then((data) =>
        setCarouselViewValue((prevData) => [...data.data, ...prevData])
      );
    setGlobalFilterValue("");
  }, []);

  const onFilter = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
    if (value.length === 0) {
      setFilteredValue(null);
    } else {
      const filtered = dataViewValue.filter((product) => {
        return product.product_title.toLowerCase().includes(value);
      });
      setFilteredValue(filtered);
    }
  };

  const onCollectionFilter = (collection) => {
    const value = collection.tags;
    setCollectionFilterValue(value);
    console.log(value);
    if (value.length === 0) {
      setFilteredValue(null);
    } else {
      const filtered = dataViewValue.filter((product) => {
        return product.tags.some((tag) => value == tag);
      });
      setFilteredValue(filtered);
    }
  };

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const dataViewHeader = (
    <div className='flex flex-column md:flex-row md:justify-content-between gap-2'>
      <Dropdown
        value={sortKey}
        options={sortOptions}
        optionLabel='label'
        placeholder='Sort By Price'
        onChange={onSortChange}
      />
      <span className='p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          value={globalFilterValue}
          onChange={onFilter}
          placeholder='Search by Name'
        />
      </span>
      {/* <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} /> */}
    </div>
  );

  const dataviewListItem = (data) => {
    return (
      <div className='col-12'>
        <div className='flex flex-column md:flex-row align-items-center p-3 w-full'>
          <img
            src={data.featured_image}
            alt={data.product_title}
            className='my-4 md:my-0 md:w-10rem shadow-2 mr-5'
          />
          <div className='flex-1 flex flex-column align-items-center text-center md:text-left'>
            <div className='font-bold text-2xl'>{data.product_title}</div>
            <div className='mb-2'>{data.description}</div>
            {/* <Rating value={data.rating} readOnly cancel={false} className="mb-2"></Rating> */}
            <div className='flex align-items-center'>
              <i className='pi pi-tag mr-2'></i>
              <span className='font-semibold'>{data.tags}</span>
            </div>
          </div>
          <div className='flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0'>
            <span className='text-2xl font-semibold mb-2 align-self-center md:align-self-end'>
              ${data.retail_price}
            </span>
            {/* <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'} className="mb-2 p-button-sm"></Button> */}
            {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
          </div>
        </div>
      </div>
    );
  };

  const dataviewGridItem = (data) => {
    return (
      <div className='col-12 md:col-6 xl:col-4 p-3'>
        <div className='card border-1 surface-border shadow-2 h-full flex flex-column'>
          <div className='flex flex-wrap gap-2 align-items-center justify-content-between mb-2'>
            <div className='flex align-items-center'>
              <i className='pi pi-tag mr-2' />
              <span className='font-semibold'>{data.tags}</span>
            </div>
            {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
          </div>
          <div className='flex flex-column align-items-center text-center mb-3'>
            <img
              src={data.featured_image}
              alt={data.product_title}
              className='shadow-2 my-3 mx-0 max-w-full'
            />
            {/* <Rating value={data.rating} readOnly cancel={false} /> */}
          </div>
          <div>
            <div className='text-2xl font-bold'>{data.product_title}</div>
            <div className='mb-3'>{data.description}</div>
          </div>
          <hr />
          <div className='flex align-items-center justify-content-between'>
            <div>
              <div className='text-l font-semibold'>
                You Pay : ${data.price}
              </div>
              <div className='text-l font-semibold'>
                You Sell : ${data.retail_price}
              </div>
            </div>
            <div>
              <div className='text-l font-semibold'>Profit</div>
              <div className='text-l font-semibold text-green-500'>
                ${data.retail_price - data.price}
              </div>
            </div>
          </div>
          <div className='flex flex-grow-1'>
            <Button
              icon='pi pi-shopping-cart'
              label='Select'
              className='w-full mt-3 align-self-end'
            />
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (data, layout) => {
    if (!data) {
      return;
    }

    if (layout === "list") {
      return dataviewListItem(data);
    } else if (layout === "grid") {
      return dataviewGridItem(data);
    }
  };

  return (
    <div className='grid list-demo'>
      <div className='col-12'>
        <div className='card'>
          <h5>DataView</h5>
          <div>
            <Carousel
              value={carouselViewValue}
              numVisible={6}
              numScroll={3}
              responsiveOptions={carouselResponsiveOptions}
              itemTemplate={carouselItemTemplate}
            ></Carousel>
          </div>
          <DataView
            value={filteredValue || dataViewValue}
            layout={layout}
            paginator
            rows={12}
            sortOrder={sortOrder}
            sortField={sortField}
            itemTemplate={itemTemplate}
            header={dataViewHeader}
          ></DataView>
        </div>
      </div>
    </div>
  );
};

// selectProduct.getLayout = function getLayout(page) {
//     return <React.Fragment>{page}</React.Fragment>;
// };
export default SelectProducts;
