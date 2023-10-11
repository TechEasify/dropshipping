/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' }]
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Products',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [
                            {
                                label: 'Add Product',
                                icon: 'pi pi-fw pi-plus',
                                to: '/productCrud'
                            },
                            {
                                label: 'View Product',
                                icon: 'pi pi-fw pi-eye',
                                to: '/products'
                            }
                        ]
                    },
                    {
                        label: 'Collections',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [
                            {
                                label: 'Add Collection',
                                icon: 'pi pi-fw pi-plus',
                                to: '/collectionCrud'
                            }
                        ]
                    },
                    {
                        label: 'Plans',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [
                            {
                                label: 'Add Plan',
                                icon: 'pi pi-fw pi-plus',
                                to: '/planCrud'
                            },
                            {
                                label: 'View Plan',
                                icon: 'pi pi-fw pi-eye',
                                to: '/plans'
                            }
                        ]
                    },
                    {
                        label: 'Update Product Image',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/updateProductImage'
                    },
                    {
                        label: 'Update Product Label',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/updateProductLabel'
                    },
                    {
                        label: 'Select Products',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/selectProducts'
                    },
                    {
                        label: 'Branding',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/branding'
                    },
                    {
                        label: 'Push To Store',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/pushToStore'
                    },
                    {
                        label: 'Live On Store',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/liveOnStore'
                    }
                ]
            },
            {
                label: 'Admin',
                icon: 'pi pi-fw pi-lock',
                items: [
                    {
                        label: 'All Vendors',
                        icon: 'pi pi-fw pi-user',
                        to: '/allVendors'
                    },
                    {
                        label: 'All Orders',
                        icon: 'pi pi-fw pi-shopping-bag',
                        to: '/allOrders'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-lock',
                items: [
                    {
                        label: 'Sign Out',
                        icon: 'pi pi-fw pi-briefcase',
                        to: '/auth/signout'
                    }
                ]
            }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;