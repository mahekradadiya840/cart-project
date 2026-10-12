import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const orders = useSelector((state) => state.cart)

    return (
        <div className='container'>
            <div className='text-center'>
                <table className="table table-success table-striped align-middle">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.cartData.map((item, index) => {
                                return <tr key={item.id}>
                                    <th className='col-1' scope="row">{index + 1}</th>
                                    <td className='col-1'>
                                        <div className='p-2'>
                                            <img src={item.thumbnail} className='img-fluid' alt={item.title} />
                                        </div>
                                    </td>
                                    <td className='col-3'>{item.title}</td>
                                    <td className='col-2'>{item.qty}</td>
                                    <td className='col-2'>${(Math.round(item.price) * item.qty).toFixed(2)}</td>
                                </tr>
                            })
                        }

                        <tr>
                            <td colSpan={4}>Amount</td>
                            <td><b>${orders.amount.toFixed(2)}</b></td>
                        </tr>
                        <tr>
                            <td colSpan={4}>C-GST 9%</td>
                            <td>${orders.c_gst_9.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>S-GST 9%</td>
                            <td>${orders.s_gst_9.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Total</td>
                            <td><b>${orders.Total.toFixed(2)}</b></td>
                        </tr>
                        <tr>
                            <td colSpan={4}><b>Total in INR</b></td>
                            <td><b>₹{orders.inr.toFixed(2)}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart;