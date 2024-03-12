import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ProductItem } from '@components/index';

export default function Template() {
  const history = useHistory();

  const items = [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
    <ProductItem key={item} />
  ));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [orderbox, setOrderbox] = useState(false);

  const images = [
    {
      name: "All",
      image: "https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png"
    },
    {
      name: "Skin care",
      image: "https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/fb5/9e9/3b-/original/FLLF8-2.png"
    },
    {
      name: "Hair care",
      image: "https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/07b/4f1/85-/original/natural-daily-moisturizer.png"
    }

  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* <div className="product-templates">
        <div className="product-templates-dashboard-page pf-mt-24" style={{ position: 'relative' }}>
          <div className="product-templates-dashboard-page__header pf-d-flex pf-flex-column pf-align-items-stretch pf-flex-xs-row pf-align-items-xs-center pf-justify-content-xs-between pf-mb-40">
            <div className="product-templates-dashboard-page__title"><h2 className="pf-h2 pf-mb-0">Selected Product</h2></div>
            <div className="product-templates-dashboard-page__top-button">
              <a className="pf-btn pf-btn-secondary pf-btn-block" onClick={() => history.push('/template/create')} href="#">
                New template
              </a>
            </div>
          </div>

          <div className="product-templates-dashboard-page__main-area">
            <div className="product-templates-toolbar">
              <div className="product-templates-toolbar__main-container pf-align-items-center row">
                <div className="product-templates-toolbar__select-all order-last order-sm-0 pf-mt-16 pf-mt-sm-0 clearfix col-sm-2 col-lg-3">
                  <label className="pf-m-0 pf-ui-body float-left float-sm-none">
                    <input type="checkbox" className="pf-ui-body" />
                    <span className="pf-ml-4">
                      Select All
                    </span>
                  </label>
                </div>

                <div className="product-templates-toolbar__other-items col-sm-10 col-lg-9">
                  <div className="product-templates-filter row no-gutters">
                    <div className="product-templates-filter__search col-sm-5 col-md-6 pf-mb-12 pf-mb-sm-0"><input type="text" placeholder="Search" className="search" /></div>
                    <div className="product-templates-filter__secondary-filters col-sm-7 col-md-6 pf-pl-sm-12 pf-d-flex pf-justify-content-between">
                      <div className="product-templates-filter__sort-by styled-select grow-1">
                        <select className="form-control">
                          <optgroup label="Select a sort order">
                            <option value="CREATED_DATE_DESC">
                              Created: newest first
                            </option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="product-templates-filter__view-types pf-font-size-none">
                        <a className="pf-btn pf-btn-outline pf-btn-square pf-ml-12 disabled"><i className="pf-i pf-i-view-grid pf-i-24" /></a>
                        <a className="pf-btn pf-btn-outline pf-btn-square pf-ml-12"><i className="pf-i pf-i-view-list pf-i-24" /></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pf-mt-8 pf-border-bottom" />
            </div>

            <div className="product-templates-items-viewport pf-my-24">
              <div className="product-templates-container product-templates-grid row">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div>
          <div className='row'>
            <div className="catalog-container">
              <div className="card-slider">
                <button className="prev" onClick={handlePrevClick}>
                  &#10094;
                </button>
                <button className="next" onClick={handleNextClick}>
                  &#10095;
                </button>
                <div className="image-container">
                  {images.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <label className={index === currentImageIndex ? 'active' : ''}>
                        <img src={image.image} alt={`Slide ${index + 1}`} />
                      </label>
                      <hr />
                      <div className='card-lable'>
                        <h6>{image.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='card-catalog'>
              <Card sx={{ maxWidth: 350, margin: 1 }} className='card-detail'>
                <CardMedia
                  className='cardimg-mui'
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png"
                  onClick={() => history.push("/template/view")}
                />
                <CardContent>
                  <h5>Liquid Foundation - Mahogany</h5>
                  <div className='card-inner'>
                    <div className='card-alltext'>
                      <div className='card-pay'>
                        <h6>
                          You Pay:
                          $11.40
                        </h6>
                        <h6>Shipping charges: $5</h6>
                        <p>You sell: $37</p>
                      </div>
                      <div className='card-profit'>
                        <h6>Profit: </h6>
                        <h6 style={{ color: "green" }}>
                          $20.60
                        </h6>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className='card-button'>
                  <div className='shopping-cart'>
                    <Button className='shopping-btn'><AddShoppingCartIcon className='shopping-icon' /></Button>
                  </div>
                  <div className='addtoproduct'>
                    <Button className='product-btn' onClick={() => history.push("/template/view")}>Add to Products</Button>
                  </div>
                </div>
              </Card>

              <Card sx={{ maxWidth: 350, margin: 1 }} className='card-detail'>
                <CardMedia
                  className='cardimg-mui'
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png"
                  onClick={() => history.push("/template/view")}
                />
                <CardContent>
                  <h5>Liquid Foundation - Mahogany</h5>
                  <div className='card-inner'>
                    <div className='card-alltext'>
                      <div className='card-pay'>
                        <h6>
                          You Pay:
                          $11.40
                        </h6>
                        <h6>Shipping charges: $5</h6>
                        <p>You sell: $37</p>
                      </div>
                      <div className='card-profit'>
                        <h6>Profit: </h6>
                        <h6 style={{ color: "green" }}>
                          $20.60
                        </h6>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className='card-button'>
                  <div className='shopping-cart'>
                    <Button className='shopping-btn'><AddShoppingCartIcon className='shopping-icon' /></Button>
                  </div>
                  <div className='addtoproduct'>
                    <Button className='product-btn' onClick={() => history.push("/template/view")}>Add to Products</Button>
                  </div>
                </div>
              </Card>

              <Card sx={{ maxWidth: 350, margin: 1 }} className='card-detail'>
                <CardMedia
                  className='cardimg-mui'
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png"
                  onClick={() => history.push("/template/view")}
                />
                <CardContent>
                  <h5>Liquid Foundation - Mahogany</h5>
                  <div className='card-inner'>
                    <div className='card-alltext'>
                      <div className='card-pay'>
                        <h6>
                          You Pay:
                          $11.40
                        </h6>
                        <h6>Shipping charges: $5</h6>
                        <p>You sell: $37</p>
                      </div>
                      <div className='card-profit'>
                        <h6>Profit: </h6>
                        <h6 style={{ color: "green" }}>
                          $20.60
                        </h6>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className='card-button'>
                  <div className='shopping-cart'>
                    <Button className='shopping-btn'><AddShoppingCartIcon className='shopping-icon' /></Button>
                  </div>
                  <div className='addtoproduct'>
                    <Button className='product-btn' onClick={() => history.push("/template/view")}>Add to Products</Button>
                  </div>
                </div>
              </Card>

              <Card sx={{ maxWidth: 350, margin: 1 }} className='card-detail'>
                <CardMedia
                  className='cardimg-mui'
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png"
                  onClick={() => history.push("/template/view")}
                />
                <CardContent>
                  <h5>Liquid Foundation - Mahogany</h5>
                  <div className='card-inner'>
                    <div className='card-alltext'>
                      <div className='card-pay'>
                        <h6>
                          You Pay:
                          $11.40
                        </h6>
                        <h6>Shipping charges: $5</h6>
                        <p>You sell: $37</p>
                      </div>
                      <div className='card-profit'>
                        <h6>Profit: </h6>
                        <h6 style={{ color: "green" }}>
                          $20.60
                        </h6>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className='card-button'>
                  <div className='shopping-cart'>
                    <Button className='shopping-btn'><AddShoppingCartIcon className='shopping-icon' /></Button>
                  </div>
                  <div className='addtoproduct'>
                    <Button className='product-btn' onClick={() => history.push("/template/view")}>Add to Products</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
