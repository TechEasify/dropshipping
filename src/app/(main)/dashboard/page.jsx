"use client";
import getConfig from "next/config";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductService } from "../../../demo/service/ProductService";
import { LayoutContext } from "../../../layout/context/layoutcontext";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "#2f4860",
      borderColor: "#2f4860",
      tension: 0.4,
    },
    {
      label: "Second Dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: "#00bb7e",
      borderColor: "#00bb7e",
      tension: 0.4,
    },
  ],
};
const newlineOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
    y: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
  },
};

const stepsOption = [
  {
    title: "Design Your First Product",
    description:
      "Pick a product, add your design, and save it as a product template. You can later edit, order, and add the designed products to your store.",
    completed: true,
    link: "/selectProducts",
  },
  {
    title: "Connect Your Store",
    description:
      "To start selling your products, you need to connect a store to Printful. Create a new store or connect an existing one in a few simple steps.",
    completed: false,
    link: "/stores",
  },
  {
    title: "Add Product To Store",
    description:
      "Add your first product to your store and start selling. You can design products from scratch or use previously created product templates.",
    completed: false,
    link: "/productTemplate",
  },
];

const Dashboard = () => {
  const [products, setProducts] = useState(undefined);
  const [selectedStep, setSelectedStep] = useState(stepsOption[0]);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  const [lineOptions, setLineOptions] = useState(newlineOptions);
  const { layoutConfig } = useContext(LayoutContext);

  const applyLightTheme = () => {
    setLineOptions(lineOptions);
  };

  const applyDarkTheme = () => {
    const lineOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#ebedef",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
        y: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
      },
    };

    setLineOptions(lineOptions);
  };

  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts().then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });
  }, []);

  useEffect(() => {
    if (layoutConfig.colorScheme === "light") {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  }, [layoutConfig.colorScheme]);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className='grid'>
      <div className='col-12 lg:col-6 xl:col-3'>
        <div className='card mb-0'>
          <div className='flex justify-content-between mb-3'>
            <div>
              <span className='block text-500 font-medium mb-3'>Orders</span>
              <div className='text-900 font-medium text-xl'>152</div>
            </div>
            <div
              className='flex align-items-center justify-content-center bg-blue-100 border-round'
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className='pi pi-shopping-cart text-blue-500 text-xl' />
            </div>
          </div>
          <span className='text-green-500 font-medium'>24 new </span>
          <span className='text-500'>since last visit</span>
        </div>
      </div>
      <div className='col-12 lg:col-6 xl:col-3'>
        <div className='card mb-0'>
          <div className='flex justify-content-between mb-3'>
            <div>
              <span className='block text-500 font-medium mb-3'>Revenue</span>
              <div className='text-900 font-medium text-xl'>$2.100</div>
            </div>
            <div
              className='flex align-items-center justify-content-center bg-orange-100 border-round'
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className='pi pi-map-marker text-orange-500 text-xl' />
            </div>
          </div>
          <span className='text-green-500 font-medium'>%52+ </span>
          <span className='text-500'>since last week</span>
        </div>
      </div>
      <div className='col-12 lg:col-6 xl:col-3'>
        <div className='card mb-0'>
          <div className='flex justify-content-between mb-3'>
            <div>
              <span className='block text-500 font-medium mb-3'>Customers</span>
              <div className='text-900 font-medium text-xl'>28441</div>
            </div>
            <div
              className='flex align-items-center justify-content-center bg-cyan-100 border-round'
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className='pi pi-inbox text-cyan-500 text-xl' />
            </div>
          </div>
          <span className='text-green-500 font-medium'>520 </span>
          <span className='text-500'>newly registered</span>
        </div>
      </div>
      <div className='col-12 lg:col-6 xl:col-3'>
        <div className='card mb-0'>
          <div className='flex justify-content-between mb-3'>
            <div>
              <span className='block text-500 font-medium mb-3'>Comments</span>
              <div className='text-900 font-medium text-xl'>152 Unread</div>
            </div>
            <div
              className='flex align-items-center justify-content-center bg-purple-100 border-round'
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className='pi pi-comment text-purple-500 text-xl' />
            </div>
          </div>
          <span className='text-green-500 font-medium'>85 </span>
          <span className='text-500'>responded</span>
        </div>
      </div>

      <div className='col-12'>
        <div className='card'>
          <h5>Your next steps</h5>
          <p>
            Set up your business, earn rewards, and start making money with
            Printful
          </p>

          <div className='grid'>
            <div className='col'>
              {stepsOption.map((step, stepIndex) => {
                return (
                  <div
                    className='card p-3 shadow-1 mb-2'
                    key={stepIndex}
                    onClick={() => setSelectedStep(step)}
                  >
                    <p>
                      {stepIndex + 1}. {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className='col'>
              <h5>{selectedStep.title}</h5>
              <p>{selectedStep.description}</p>
              {selectedStep.completed === false ? (
                <Link href={selectedStep.link} className='p-button p-component'>
                  {selectedStep.title}
                </Link>
              ) : (
                <p>
                  <i
                    className='pi pi-check text-green-600 font-bold'
                    style={{ marginRight: ".5rem" }}
                  ></i>
                  Completed
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='col-12'>
        <div className='card'>
          <h5>Due Shipping</h5>
          <DataTable
            value={products}
            rows={2}
            paginator
            responsiveLayout='scroll'
          >
            <Column
              header='Image'
              body={(data) => (
                <img
                  className='shadow-2'
                  src={data.featured_image}
                  alt={data.product_title}
                  width='50'
                />
              )}
            />
            <Column
              field='product_title'
              header='Name'
              sortable
              style={{ width: "35%" }}
            />
            <Column
              field='price'
              header='Price'
              sortable
              style={{ width: "35%" }}
              body={(data) => formatCurrency(data.price)}
            />
            <Column
              header='View'
              style={{ width: "15%" }}
              body={() => (
                <>
                  <Button
                    icon='pi pi-search'
                    type='button'
                    className='p-button-text'
                  />
                </>
              )}
            />
          </DataTable>
        </div>
      </div>

      <div className='col-12 xl:col-6'>
        <div className='card'>
          <h5>Top Selling Product</h5>
          <DataTable
            value={products}
            rows={5}
            paginator
            responsiveLayout='scroll'
          >
            <Column
              header='Image'
              body={(data) => (
                <img
                  className='shadow-2'
                  src={data.featured_image}
                  alt={data.product_title}
                  width='50'
                />
              )}
            />
            <Column
              field='name'
              header='Name'
              sortable
              style={{ width: "35%" }}
            />
            <Column
              field='price'
              header='Price'
              sortable
              style={{ width: "35%" }}
              body={(data) => formatCurrency(data.price)}
            />
            <Column
              header='View'
              style={{ width: "15%" }}
              body={() => (
                <>
                  <Button
                    icon='pi pi-search'
                    type='button'
                    className='p-button-text'
                  />
                </>
              )}
            />
          </DataTable>
        </div>
      </div>

      <div className='col-12 xl:col-6'>
        <div className='card'>
          <h5>Top Selling Venders</h5>
          <DataTable
            value={products}
            rows={5}
            paginator
            responsiveLayout='scroll'
          >
            <Column
              header='Image'
              body={(data) => (
                <img
                  className='shadow-2'
                  src={data.featured_image}
                  alt={data.product_title}
                  width='50'
                />
              )}
            />
            <Column
              field='name'
              header='Name'
              sortable
              style={{ width: "35%" }}
            />
            <Column
              field='price'
              header='Price'
              sortable
              style={{ width: "35%" }}
              body={(data) => formatCurrency(data.price)}
            />
            <Column
              header='View'
              style={{ width: "15%" }}
              body={() => (
                <>
                  <Button
                    icon='pi pi-search'
                    type='button'
                    className='p-button-text'
                  />
                </>
              )}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
