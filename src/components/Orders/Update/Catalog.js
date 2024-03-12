import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Catalog(props) {
  console.log(props, "props Catalog");
  const history = useHistory();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div>
      <div>
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
                    onClick={() => history.push('/orders/shipping')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
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
                    onClick={() => history.push('/orders/shippingmultiple')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
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
                    onClick={() => history.push('template/1')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
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
                    onClick={() => history.push('template/1')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
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
                    onClick={() => history.push('template/1')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
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
                    onClick={() => history.push('template/1')}
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
                      <Button className='product-btn' onClick={() => history.push('template/1')}>Add to Products</Button>
                    </div>
                  </div>
                </Card>

                {/* <Card className='card-detail' onClick={handleClickOpen}>
                  <Card.Img className='card-image' variant="top" src="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png" />
                  <Card.Body>
                    <h3>Liquid Foundation - Mahogany</h3>
                    <div className='card-inner'>
                      <div className='card-alltext'>
                        <div className='card-pay'>
                          <h5 className='card-text'>
                            You Pay:
                            $11.40
                          </h5>
                          <h5>Shipping charges: $5</h5>
                          <p>You sell: $37</p>
                        </div>
                        <div className='card-profit'>
                          <h5>Profit: </h5>
                          <h5 style={{ color: "green" }}>
                            $20.60
                          </h5>
                        </div>
                      </div>
                      <div className='card-button'>
                        <div className='shopping-cart'>
                          <Button variant='dark' className='shopping-btn'><AddShoppingCartIcon className='shopping-icon' /></Button>
                        </div>
                        <div className='addtoproduct'>
                          <Button variant='danger' className='product-btn'>Add to Products</Button>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* {
          detail &&
          <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
              <Grid container>
                <Grid item xs={6} sx={{ position: 'relative' }}>
                  <Button
                    onClick={handleClose}
                    className='close-btn'
                  >
                    <CloseIcon />
                  </Button>
                  <div className='img-slider'>
                    <Slider {...settings}>
                      <div>
                        <img src="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png" alt="Image 1" style={{ height: 'auto', width: '100%' }} />
                      </div>
                      <div>
                        <img src="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/598/a30/86-/original/FLLSP2.png" alt="Image 2" style={{ height: 'auto', width: '100%' }} />
                      </div>
                    </Slider>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Grid container direction="column" justifyContent="space-between" sx={{ width: "100%", height: '100%', marginTop: "10px" }}>
                    <Grid item>
                      <Typography variant="h3">Liquid Foundation - Mahogany
                      </Typography>
                      <span className='stock-bar'>100 in stock</span>
                      <div className='detail-bar'>
                        <span class="sc-BeQoi ccUqQQ">By <u>FL Beauty</u> - From 🇺🇸<strong>United States</strong></span>
                      </div>
                      <div className='content-detail'>
                        <Typography paragraph>
                          Our liquid foundation delivers long-lasting, medium coverage while remaining weightless and fresh on your skin. Finally, the foundation you've been yearning for – so impeccable that no powder is needed to set it. It flawlessly blurs imperfections, including discoloration and unevenness, without caking or masking your skin's natural radiance.


                          Ingredients: Aqua (Water), Cyclopentasiloxane, Cera Alba (Beeswax), Stearyl Dimethicone, Isododecane, Cetyl Ethlhexanoate, Microcrystalline Wax, Cetyl PEG/PPG-10/1 Dimethicone, Glyceryl Laurate, Mica, Disteardimonium Hectorite, Methylparaben, Ethylparaben, Tocopheryl Acetate (Vitamin E), Ascorbyl Palmitate (Vitamin C), Chamomilla Recutita (Matricaria) Extract, Sodium Hyaluronate. MAY CONTAIN (+/-): Iron Oxides(CI 177491, CI 177492, CI 177499),Titanium Dioxide (CI 177891)
                        </Typography>
                      </div>
                      <div className='sell-btn'>
                        <FormControl>
                          <h4>How do you want to sell:</h4>
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                          >
                            <FormControlLabel value="Dropshipbranded" control={<Radio />} label="Dropship branded" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <hr />
                      <div className='card-alltext'>
                        <div className='card-pay'>
                          <h5 className='card-text'>
                            You Pay:
                            $11.40
                          </h5>
                          <h5>Shipping charges: $5</h5>
                          <p>You sell: $37</p>
                        </div>
                        <div className='card-profit'>
                          <h5>Profit: </h5>
                          <h5 style={{ color: "green" }}>
                            $20.60
                          </h5>
                        </div>
                      </div>
                      <hr />
                      <h4>Processing Time</h4>
                      <div className='sc-hTtwUo bqJrzS'>
                        <span>1-2 business days (24-48 hours)</span>
                      </div>
                      <div className='cost-detail'>
                        <h6>Shipping Time & Cost</h6>
                        <div className='dialog-price'>
                          <span className='shipinfo'>🇺🇸 United States </span>
                          <div className='sc-hTtwUo bqJrzS'>
                            <span>(4-5 business days)</span>
                          </div>
                          <div className='sc-hTtwUo bqJrzS'>
                            <h4>$5.00/ $1.00</h4>
                          </div>
                        </div>
                      </div>
                      <div className='addpro-btn'>
                        <div className='button-pro'>
                          <Button className='order-sample' onClick={handleOrder}>Order Sample</Button>
                        </div>
                        <div className='product-btn'>
                          <Button className='AddtoProducts'>+ Add to Products</Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
            </Dialog>
          </>
        } */}
      </div>
    </div>
  )
}