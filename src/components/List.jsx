import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { addTocart } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const category = useSelector((state) => state.cart.selectedCategory);

    function saveTocart(product) {
        dispatch(addTocart(product));
    }

    useEffect(() => {
        setLoading(true);

        const url = category
            ? `https://dummyjson.com/products/category/${category}`
            : 'https://dummyjson.com/products';

        axios
            .get(url)
            .then(function (response) {
                setData(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            });
    }, [category]);

    function btn(rating) {
        if (rating > 4) {
            return <button className='btn btn-success rounded-pill d-flex align-items-center'>{rating} <FaStar className='i-con' /></button>
        } else if (rating > 3) {
            return <button className='btn d-flex align-items-center btn-light-green text-white rounded-pill'>{rating} <FaStar className='i-con' /></button>
        } else if (rating > 2) {
            return <button className='btn text-white d-flex align-items-center btn-warning rounded-pill'>{rating} <FaStar className='i-con' /></button>
        } else {
            return <button className='btn text-white d-flex align-items-center btn-danger rounded-pill'>{rating} <FaStar className='i-con' /></button>
        }
    }

    return (
        <div className="container">

            <h1 className="text-capitalize">
                {category ? category.replace(/-/g, " ") : "All Products"}
            </h1>

            {loading && <p>...</p>}
            <div className="row">
                {data.map((item) => (
                    <div key={item.id} className='col-lg-4 col-md-6 col-12 p-2'>
                        <div className='card p-1 h-100'>
                            <div>

                                <img
                                    src={item.thumbnail}
                                    className='img-fluid w-80'
                                    alt={item.title}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate(`/product/${item.id}`)}
                                />
                            </div>
                            <div className='card-body d-flex flex-column justify-content-between'>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className='col-4'>
                                        <h5 className='text-end'>${Math.round(item.price)}</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    {btn(item.rating)}
                                    <div className='d-flex align-items-center'>
                                        <h6 className='text-muted'>{item.reviews?.length || 0}-reviews</h6>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn bg-color w-100 mt-3' onClick={() => saveTocart(item)}>
                                        Add To cart <SlBasketLoaded className='mx-1' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;