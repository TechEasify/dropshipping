import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

function Venders() {
    const history = useHistory()

    return (
        <>
            <div className='vender-main'>
                <div className='vender-head'>
                    <h2 className='category-heading'>Venders</h2>
                    <div className="filter-search-vender">
                        <div style={{ minHeight: '39px' }}>
                            <input
                                type="text"
                                id="library-search-1"
                                style={{ display: 'none' }}
                            />
                            <div
                                id="library-search-1_tagsinput"
                                className="tagsinput"
                                style={{
                                    width: 'auto',
                                    minHeight: '39px',
                                    height: '100%',
                                }}
                            >
                                <div id="library-search-1_addTag">
                                    <span
                                        role="status"
                                        aria-live="polite"
                                        className="ui-helper-hidden-accessible"
                                    />
                                    <input
                                        id="library-search-1_tag"
                                        value=""
                                        data-default="Search files"
                                        className="ui-autocomplete-input"
                                        autoComplete="off"
                                        style={{
                                            color: 'rgb(102, 102, 102)',
                                            fontFamily: 'helvetica',
                                            width: '168px',
                                        }}
                                    />
                                </div>
                                <div className="tags_clear" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='venders-card'>
                    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/fb5/9e9/3b-/original/FLLF8-2.png"
                            title="green iguana"
                            className='card-venderImg'
                            onClick={() => history.push('/venders/detail')}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Liquid Foundation - Mahogany
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className='card-button'>
                            <div className='shopping-cart'>
                            <Button className='product-btn' onClick={() => history.push('/venders/#')}>Link</Button>
                            </div>
                            <div className='addtoproduct'>
                                <Button className='product-btn' onClick={() => history.push('/venders/detail')}>Products</Button>
                            </div>
                        </div>
                    </Card>

                    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/fb5/9e9/3b-/original/FLLF8-2.png"
                            title="green iguana"
                            className='card-venderImg'
                            onClick={() => history.push('/venders/detail')}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Liquid Foundation - Mahogany
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className='card-button'>
                            <div className='shopping-cart'>
                            <Button className='product-btn' >Link</Button>
                            </div>
                            <div className='addtoproduct'>
                                <Button className='product-btn' onClick={() => history.push('/venders/detail')}>Products</Button>
                            </div>
                        </div>
                    </Card>

                    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/fb5/9e9/3b-/original/FLLF8-2.png"
                            title="green iguana"
                            className='card-venderImg'
                            onClick={() => history.push('/venders/detail')}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Liquid Foundation - Mahogany
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className='card-button'>
                            <div className='shopping-cart'>
                            <Button className='product-btn' >Link</Button>
                            </div>
                            <div className='addtoproduct'>
                                <Button className='product-btn' onClick={() => history.push('/venders/detail')}>Products</Button>
                            </div>
                        </div>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://d46qqg0b6pc82.cloudfront.net/listing_variation_images/attachments/fb5/9e9/3b-/original/FLLF8-2.png"
                            title="green iguana"
                            onClick={() => history.push('/venders/detail')}
                            className='card-venderImg'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Liquid Foundation - Mahogany
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className='card-button'>
                            <div className='shopping-cart'>
                            <Button className='product-btn' >Link</Button>
                            </div>
                            <div className='addtoproduct'>
                                <Button className='product-btn' onClick={() => history.push('/venders/detail')}>Products</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Venders