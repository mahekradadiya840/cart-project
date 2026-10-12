import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { addTocart } from '../cart/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`https://dummyjson.com/products/${id}`, {
                timeout: 5000, // 5 seconds
            })
            .then(function (response) {
                setProduct(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            });
    }, [id]);

    function saveTocart() {
        dispatch(addTocart(product));
        navigate('/cart');
    }

    if (loading) return <div className="container"><p>...</p></div>;
    if (!product) return <div className="container"><p>Product not found</p></div>;

    return (
        <div className="container py-3">
            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                &larr;
            </button>

            <div className="row">
                <div className="col-md-5 text-center">
                    <img src={product.thumbnail} className="img-fluid" alt={product.title} />
                </div>

                <div className="col-md-7">
                    <h2>{product.title}</h2>
                    <p className="text-muted text-capitalize">{product.category}</p>
                    <p>{product.description}</p>
                    <h3>${Math.round(product.price)}</h3>

                    <p className="d-flex align-items-center gap-1">
                        {product.rating} <FaStar className="text-warning" />
                        <span className="text-muted ms-2">{product.reviews?.length || 0}-reviews</span>
                    </p>

                    <button className="btn bg-color" onClick={saveTocart}>
                        Add To cart <SlBasketLoaded className="mx-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;