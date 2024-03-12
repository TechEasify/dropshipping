import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Warehouse() {
    const history = useHistory();

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

    const handleClickOpen = () => {
        setDetail(true);
    };

    console.log(orderbox, "orderbox");
    return (
        <>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warehouse