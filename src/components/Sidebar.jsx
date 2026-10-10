import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../cart/cartSlice";

const Sidebar = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.cart.selectedCategory);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/category-list")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="main-sidebar mt-2">
            <ul className="side-main p-0 m-0">
                <li className="side-menu">
                    <button
                        className={`nav-link card-item ${selected === "" ? "fw-bold" : ""}`}
                        onClick={() => dispatch(setCategory(""))}
                    >
                        All Products
                    </button>
                </li>

                {data.map((item) => (
                    <li key={item} className="side-menu">
                        <button
                            className={`nav-link card-item ${selected === item ? "fw-bold" : ""}`}
                            onClick={() => dispatch(setCategory(item))}
                        >
                            {item.replace(/-/g, " ")}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
