import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Free',
    'Primium',
    'Growth'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const initialRows = [
    {
        id: 1, image: 'Snow', name: 'Jon', price: 60, shippingprice: 20, quantity: 2,
        feature: 'ajg', type: 'hair oil', tags: ['afgbvasg', 'agasgreh'], status: 'Deactive'
    },
    {
        id: 2, image: 'Lannister', name: 'Cersei', price: 40, shippingprice: 20, quantity: 1,
        feature: 'aagasg', type: 'hair oil', tags: ['afgbvasg', 'agasgreh'], status: 'Active'
    },
    {
        id: 3, image: 'Lannister', name: 'Jaime', price: 50, shippingprice: 20, quantity: 5,
        feature: 'ajgagbagsb', type: 'oil', tags: ['afgbvasg', 'agasgreh'], status: 'Deactive'
    },
    {
        id: 4, image: 'Stark', name: 'Arya', price: 30, shippingprice: 20, quantity: 10,
        feature: 'oijln', type: 'hair oil', tags: ['afgbvasg', 'agasgreh'], status: 'Active'
    },
];

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];

const exceptThisSymbols = ["e", "E", "+", "-", "."];

function Products() {
    const history = useHistory()
    const [newCategory, setNewCategory] = useState(false);
    const [categoryData, setCategoryData] = useState({
        id: null,
        name: '',
        price: '',
        shippingprice: '',
        quantity: '',
        feature: '',
        type: '',
        image: null,
        status: '',
        tags: [],
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [rows, setRows] = useState(initialRows);
    const [errors, setErrors] = useState({
        name: '',
        price: '',
        shippingprice: '',
        quantity: '',
        feature: '',
        type: '',
        image: '',
        status: '',
        tags: '',
    });
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [plans, setPlans] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <CategoryWithImage {...params} /> },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'shippingprice', headerName: 'Shipping Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'feature', headerName: 'Feature', width: 130 },
        { field: 'type', headerName: 'Type', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => <EditButton params={params.row} onEdit={handleEdit} />,
        },
    ];

    const handleEdit = (category) => {
        setCategoryData({
            ...category,
            planSelection: category.tags,
        });
        setNewCategory(true);
    };
    console.log(categoryData, "categoryData");

    function CategoryWithImage(params) {
        return <Avatar src={getImageForProduct(params.row.image)} alt={params.row.image} style={{ width: 40, height: 40 }} />;
    }

    function getImageForProduct(category) {
        return category;
    }

    function EditButton({ params, onEdit }) {
        return (
            <>
                <Button className="download-btn" variant="contained" color="primary" onClick={() => onEdit(params)}>
                    <EditIcon />
                </Button>
            </>
        );
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            setLoading(true);

            reader.onloadend = () => {
                setTimeout(() => {
                    setCategoryData((prevData) => ({
                        ...prevData,
                        image: reader.result,
                    }));
                    setImagePreview(reader.result);
                    setLoading(false);
                }, 2000);
            };
            reader.readAsDataURL(file);
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            image: '',
        }));
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'planSelection') {
            setPlans(value);
        } else {
            setCategoryData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSwitchChange = (event) => {
        const { name, checked } = event.target;
        setCategoryData((prevData) => ({
            ...prevData,
            [name]: checked ? 'Active' : 'Deactive',
        }));
    };

    const handleSubmit = () => {
        if (validateForm()) {
            if (categoryData.id !== null) {
                // If id exists, update an existing category
                const updatedRows = rows.map(row => {
                    if (row.id === categoryData.id) {
                        return {
                            ...row,
                            name: categoryData.name,
                            price: categoryData.price,
                            shippingprice: categoryData.shippingprice,
                            quantity: categoryData.quantity,
                            feature: categoryData.feature,
                            type: categoryData.type,
                            image: categoryData.image,
                            status: categoryData.status,
                            tags: categoryData.tags,
                        };
                    }
                    return row;
                });
                setRows(updatedRows);
            } else {
                // If id is null, add a new category
                const newCategory = {
                    id: rows.length + 1,
                    name: categoryData.name,
                    price: categoryData.price,
                    shippingprice: categoryData.shippingprice,
                    quantity: categoryData.quantity,
                    feature: categoryData.feature,
                    type: categoryData.type,
                    image: categoryData.image,
                    status: categoryData.status,
                    tags: categoryData.tags,
                };
                setRows(prevRows => [...prevRows, newCategory]);
            }

            // Reset form fields and related states
            setCategoryData({
                id: null,
                name: '',
                price: '',
                shippingprice: '',
                quantity: '',
                feature: '',
                type: '',
                image: null,
                status: '',
                tags: [],
            });
            setNewCategory(false); // Close the form
        }
        console.log(categoryData, "categoryData");
        if (categoryData !== "") {
            history.push({pathname: '/manageable/editproduct', state: categoryData})
        }
    };


    // Function to validate form fields
    const validateForm = () => {
        let formIsValid = true;
        const newErrors = { ...errors };

        // Validate name field
        if (!categoryData.name) {
            newErrors.name = 'Name is required';
            formIsValid = false;
        } else {
            newErrors.name = '';
        }

        // Validate price field
        if (!categoryData.price) {
            newErrors.price = 'Price is required';
            formIsValid = false;
        } else {
            newErrors.price = '';
        }

        // Validate shippingprice field
        if (!categoryData.shippingprice) {
            newErrors.shippingprice = 'Shipping Price is required';
            formIsValid = false;
        } else {
            newErrors.shippingprice = '';
        }

        // Validate quantity field
        if (!categoryData.quantity) {
            newErrors.quantity = 'Quantity is required';
            formIsValid = false;
        } else {
            newErrors.quantity = '';
        }

        // Validate feature field
        if (!categoryData.feature) {
            newErrors.feature = 'Feature is required';
            formIsValid = false;
        } else {
            newErrors.feature = '';
        }

        // Validate feature field
        if (!categoryData.type) {
            newErrors.type = 'Type is required';
            formIsValid = false;
        } else {
            newErrors.type = '';
        }

        // Validate image field
        if (!categoryData.image) {
            newErrors.image = 'Image is required';
            formIsValid = false;
        } else {
            newErrors.image = '';
        }

        // Validate tags field
        if (categoryData.tags.length === 0) {
            newErrors.tags = 'At least one tag is required';
            formIsValid = false;
        } else {
            newErrors.tags = '';
        }

        // Update errors state
        setErrors(newErrors);

        return formIsValid;
    };

    const handleDeleteTag = (index) => {
        const newTags = [...categoryData.tags];
        newTags.splice(index, 1);
        setCategoryData((prevData) => ({
            ...prevData,
            tags: newTags,
        }));
    };

    return (
        <>
            {
                newCategory ?
                    <>
                        <div className="product-main">
                            <div className="main-text">
                                {categoryData.id !== null ? <h2>Edit Products</h2> : <h2>New Products</h2>}
                                <Button className="category-btn" onClick={() => setNewCategory(false)}>
                                    close
                                </Button>
                            </div>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Name</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="text"
                                        name="name"
                                        maxLength={35}
                                        className="form-control inspectletIgnore newcategory"
                                        onChange={handleInputChange}
                                        value={categoryData.name}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.name}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Price</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control inspectletIgnore newcategory"
                                        onChange={handleInputChange}
                                        onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                        value={categoryData.price}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.price}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Shipping Price</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="number"
                                        name="shippingprice"
                                        className="form-control inspectletIgnore newcategory"
                                        onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                        onChange={handleInputChange}
                                        value={categoryData.shippingprice}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.shippingprice}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Quantity</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="text"
                                        name="quantity"
                                        onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                        className="form-control inspectletIgnore newcategory"
                                        onChange={handleInputChange}
                                        value={categoryData.quantity}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.quantity}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Feature</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="text"
                                        name="feature"
                                        maxLength={35}
                                        className="form-control inspectletIgnore newcategory"
                                        onChange={handleInputChange}
                                        value={categoryData.feature}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.feature}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Type</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        type="text"
                                        name="type"
                                        maxLength={35}
                                        className="form-control inspectletIgnore newcategory"
                                        onChange={handleInputChange}
                                        value={categoryData.type}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.type}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Plan Selection</h6>
                                </div>
                                <div className='product-input'>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            multiple
                                            name="planSelection"
                                            value={plans}
                                            onChange={handleInputChange}
                                            input={<OutlinedInput id="select-multiple-chip" />}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value) => (
                                                        console.log(value, "value"),
                                                        <Chip key={value} label={value} />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, plans, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <span className="error">{errors.feature}</span>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Photo</h6>
                                </div>
                                <div className='product-input'>
                                    <input
                                        className="category-img"
                                        name="image"
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        id="file-upload"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.image}</span>
                            <div className='product-input'>
                                <div className="preview-image">{loading ? (
                                    <Skeleton variant="circular" width={100} height={100} />
                                ) : (
                                    imagePreview && <Avatar src={imagePreview} alt="Preview" style={{ width: 100, height: 100 }} />
                                )}</div>
                            </div>
                            <div className="category-name">
                                <div className='product-name'>
                                    <h6 className="cat-text">Tag</h6>
                                </div>
                                <div className='product-input'>
                                    <Autocomplete
                                        multiple
                                        className='AutoTag'
                                        id="tags-filled"
                                        options={top100Films.map((option) => option.title)}
                                        value={categoryData.tags}
                                        onChange={(event, newValue) => {
                                            setCategoryData((prevData) => ({
                                                ...prevData,
                                                tags: newValue,
                                            }));
                                        }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    endAdornment: null,
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <span className="error">{errors.tags}</span>
                            <div className='product-input'>
                                <div className="rendered-tags">
                                    {categoryData.tags.map((option, index) => (
                                        <Chip key={index} variant="outlined" label={option} onDelete={() => handleDeleteTag(index)} />
                                    ))}
                                </div>
                            </div>
                            {newCategory && (
                                <div style={{ display: "flex" }}>
                                    <div className='product-name'>
                                        <h6 className="cat-text">Status</h6>
                                    </div>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Switch checked={categoryData.status === 'Active'} onChange={handleSwitchChange} name="status" />}
                                            label={categoryData.status}
                                        />
                                    </FormGroup>
                                </div>
                            )}

                            <Button className="category-btn" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                        <br />
                    </>
                    :
                    <>
                        <div className='product-table'>
                            <div className='category-head'>
                                <h2>Products</h2>
                                <Button className='category-btn' onClick={() => setNewCategory(true)}>New Product</Button>
                            </div>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </div>

                    </>
            }
        </>
    )
}

export default Products