import { SlBasketLoaded } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FcCloseUpMode } from "react-icons/fc";

const Header = () => {

    const cartData = useSelector((state) => state.cart.cartData);

    return (

        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h2><FcCloseUpMode className="size"/>  Products</h2></Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">

                                <Link
                                    to="/cart"
                                    className="nav-link active fs-6 d-inline-flex align-items-center position-relative"
                                >
                                    Cart

                                    <div className="position-relative">

                                        <SlBasketLoaded size={18} />

                                        {
                                            cartData?.length > 0 && (
                                                <span
                                                    className="position-absolute top-0 start-100 translate-end badge rounded-pill bg-danger"
                                                    style={{
                                                        fontSize: "10px"
                                                    }}
                                                >
                                                    {cartData.length}
                                                </span>
                                            )
                                        }

                                    </div>

                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;