import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { Buttons } from '@components/Buttons';


const OrderDetails = ({ orderId, fetchOrders }) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    const [post, setPost] = useState({ date: "", email: "", first: "", last: "", phone: "", company: "", address: "", b_address: "", notes: "", uploadedFileName:"" });
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            if (!orderId) {
                setPost({
                    date: "",
                    email: "",
                    first: "",
                    last: "",
                    phone: "",
                    company: "",
                    address: "",
                    b_address: "",
                    notes: "",
                    uploadedFileName:"",
                });
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/order/${orderId}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getPost();
    }, [orderId]);

    const handleDelete = async (e) => {
        e.preventDefault();
        const hasConfirmed = confirm("Are you sure you want to delete this order?");

        if (hasConfirmed) {
            try {
                const response = await fetch(`/api/order/${orderId}`, {
                    method: "DELETE",
                });

                if (response.status === 200) {
                    alert("Order deleted successfully");
                    fetchOrders();
                }

            } catch (error) {
                console.log(error);
            }

        }

    };

    const updateOrder = async (e) => {
        e.preventDefault();

        // setLoading(true);

        try {
            const response = await fetch(`/api/order/${orderId}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json', // Specify content type
                },
                body: JSON.stringify({ order: post }),
            });
            if (response.ok) {
                alert("Order updated successfully");
                fetchOrders();
            }

        } catch (error) {
            console.log(error);
        }

    };

    // Convert the order.date string to a Date object

    const orderDate = new Date(post.date);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutes}${ampm}`;
    };

    // Format the date as dd-MMM-yyyy hh:mmam/pm
    const formattedDate = post.date ? `${orderDate.getDate()}-${months[orderDate.getMonth()]}-${orderDate.getFullYear()} ${formatTime(orderDate)}` : "";

    return (
        <>
            <div className='mx-5'>
                <p className='mb-2'>ID: {orderId} </p>
                <p className='mb-10'>Date: {formattedDate} </p>
                <form>

                    {/* CONTACT INFORMATION*/}

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.email}
                            onChange={(e) => setPost({ ...post, email: e.target.value })}
                            type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={post.first}
                                onChange={(e) => setPost({ ...post, first: e.target.value })}
                                type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={post.last}
                                onChange={(e) => setPost({ ...post, last: e.target.value })}
                                type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={post.phone}
                                onChange={(e) => setPost({ ...post, phone: e.target.value })}
                                type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={post.company}
                                onChange={(e) => setPost({ ...post, company: e.target.value })}
                                type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                        </div>
                    </div>

                    {/* SHIPPING ADDRESS*/}
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <textarea
                        value={post.address}
                        onChange={(e) => setPost({ ...post, address: e.target.value })}
                        id="address" rows="3" className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services...">
                    </textarea>
                    <label htmlFor="b_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Billing Address</label>
                    <textarea
                        value={post.b_address}
                        onChange={(e) => setPost({ ...post, b_address: e.target.value })}
                        id="b_address" rows="3" className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services...">
                    </textarea>

                    <label className="block mb-2 my-2 text-sm font-medium text-gray-900 dark:text-white">Sample List</label>
                 
    
                    {post.uploadedFileName !== "" && (
                        <a href={`uploads/${post.uploadedFileName}`} download>{post.uploadedFileName}</a>
                    )}
                   


                    <label htmlFor="form_message" className="block mb-2 my-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes</label>
                    <textarea
                        value={post.notes}
                        onChange={(e) => setPost({ ...post, notes: e.target.value })}
                        id="form_message" rows="3" className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services...">
                    </textarea>
                    <div className='flex'>
                        <div className='flex-1 mr-1'>
                            <Buttons
                                type="submit"
                                onClick={updateOrder}
                                // disabled= {true}
                                className='btn' buttonStyle='btn--primary' buttonSize='btn--medium'>Edit</Buttons>
                        </div>
                        <div className='flex-1'>
                            <Buttons
                                type="submit"
                                onClick={handleDelete}
                                className='btn ' buttonStyle='btn--primary' buttonSize='btn--medium'>Delete</Buttons>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default OrderDetails;