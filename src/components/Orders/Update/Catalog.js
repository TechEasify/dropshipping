/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Catalog(props) {
  const history = useHistory();
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 hidden-xs catalog__sidebar-floating">
                <div
                  className="catalog__sidebar-content"
                  style={{ minHeight: '70vh' }}
                >
                  <ul className="catalog__sidebar-menu catalog__sidebar-menu--hide-children catalog__sidebar-menu--top-level hidden-xs">
                    {/*  */}
                    {props.data.map((item, index) => (
                      <div key={index}>
                        <li className="catalog__sidebar-menu__item pf-py-4 catalog__sidebar-menu__item--active">
                          <a href="#">{item.name}</a>
                          <ul
                            className="catalog__sidebar-menu"
                            style={{ height: 'auto' }}
                          >
                            {item.children.map((child, i) => (
                              <li
                                className="catalog__sidebar-menu__item pf-py-4"
                                key={i}
                              >
                                <a href="#">{child.name}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </div>
                    ))}
                    {/*  */}
                  </ul>
                  <div />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-10">
                <div className="catalog clearfix">
                  {/*  */}
                  {props.data.map((item, index) => (
                    <div key={index}>
                      <a
                        href="#"
                        className="col-xl-4 col-md-6 col-12 catalog__category pf-mb-16 pf-mb-md-24 pf-mb-lg-32"
                      >
                        <div
                          className="catalog__category__inner"
                          onClick={props.handleAddProduct}
                        >
                          <img
                            alt="example"
                            src="https://files.cdn.dropshippy.com/o/upload/catalog_category/fb/fbf0cf796a5603666e85713ece1708a1_t?v=1591698294"
                            className="catalog__category__thumbnail"
                          />
                          <h3 className="pf-h5 pf-p-12 pf-m-0 pf-py-0">
                            {item.name}
                          </h3>
                        </div>
                      </a>
                    </div>
                  ))}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
