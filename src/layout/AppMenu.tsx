/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { AppMenuItem } from "../types/types";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const model: AppMenuItem[] = [
    {
      label: "Home",
      items: [
        { label: "Dashboard", icon: "pi pi-fw pi-home", to: "/dashboard" },
      ],
    },
    {
      label: "Manage",
      icon: "pi pi-fw pi-briefcase",
      items: [
        {
          label: "Products Catalog",
          icon: "pi pi-fw pi-briefcase",
          to: "/selectProducts",
        },
        {
          label: "Orders",
          icon: "pi pi-fw pi-briefcase",
          to: "/orders",
        },
        {
          label: "Product Template",
          icon: "pi pi-fw pi-briefcase",
          to: "/productTemplate",
        },
        {
          label: "Stores",
          icon: "pi pi-fw pi-briefcase",
          to: "/stores",
        },
        {
          label: "Memberships",
          icon: "pi pi-fw pi-briefcase",
          to: "/membership",
        },
        // {
        //   label: "Products",
        //   icon: "pi pi-fw pi-briefcase",
        //   items: [
        //     {
        //       label: "Add Product",
        //       icon: "pi pi-fw pi-plus",
        //       to: "/productCrud",
        //     },
        //     {
        //       label: "View Product",
        //       icon: "pi pi-fw pi-eye",
        //       to: "/products",
        //     },
        //   ],
        // },
        // {
        //   label: "Collections",
        //   icon: "pi pi-fw pi-briefcase",
        //   items: [
        //     {
        //       label: "Add Collection",
        //       icon: "pi pi-fw pi-plus",
        //       to: "/collectionCrud",
        //     },
        //   ],
        // },
        // {
        //   label: "Plans",
        //   icon: "pi pi-fw pi-briefcase",
        //   items: [
        //     {
        //       label: "Add Plan",
        //       icon: "pi pi-fw pi-plus",
        //       to: "/planCrud",
        //     },
        //     {
        //       label: "View Plan",
        //       icon: "pi pi-fw pi-eye",
        //       to: "/plans",
        //     },
        //   ],
        // },
        // {
        //   label: "Update Product Image",
        //   icon: "pi pi-fw pi-briefcase",
        //   to: "/updateProductImage",
        // },
        // {
        //   label: "Update Product Label",
        //   icon: "pi pi-fw pi-briefcase",
        //   to: "/updateProductLabel",
        // },
        {
          label: "Branding",
          icon: "pi pi-fw pi-briefcase",
          to: "/branding",
        },
        {
          label: "Billing",
          icon: "pi pi-fw pi-briefcase",
          to: "/billing",
        },
        {
          label: "Analytics",
          icon: "pi pi-fw pi-briefcase",
          to: "/analytics",
        },
        {
          label: "Warehouse",
          icon: "pi pi-fw pi-briefcase",
          to: "/warehouse",
        },
      ],
    },
    // {
    //     label: 'Admin',
    //     icon: 'pi pi-fw pi-lock',
    //     items: [
    //         {
    //             label: 'All Vendors',
    //             icon: 'pi pi-fw pi-user',
    //             to: '/allVendors'
    //         },
    //         {
    //             label: 'All Orders',
    //             icon: 'pi pi-fw pi-shopping-bag',
    //             to: '/allOrders'
    //         }
    //     ]
    // },
    // {
    //     label: 'Profile',
    //     icon: 'pi pi-fw pi-lock',
    //     items: [
    //         {
    //             label: 'Sign Out',
    //             icon: 'pi pi-fw pi-briefcase',
    //             command:()=>{ signOut({ callbackUrl: '/auth/login' });}
    //         }
    //     ]
    // }
  ];

  return (
    <MenuProvider>
      <ul className='layout-menu'>
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className='menu-separator'></li>
          );
          // return <AppMenuitem item={item} root={true} index={i} key={item.label} />;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
