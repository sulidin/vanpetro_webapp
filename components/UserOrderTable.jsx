'use client';
import React, { useEffect, useState } from 'react';
import Order from '@components/Order';
import { useSession } from "next-auth/react"
import OrderDetails from '@components/OrderDetails';



const OrderList = ({ data, handleClick, selectedOrderId}) => {
    return (
        <>
            {data.map((order) => (
                <Order
                    key={order._id}
                    order={order}
                    isSelected={order._id === selectedOrderId}
                    handleClick={() => handleClick(order._id)} // Pass the clicked order's orderId
                />
            ))}
        </>
    )
}


const UserOrderTable = () => {

    const { data: session } = useSession()
    const [allOrders, setAllOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleClick = (orderId) => {
        setSelectedOrderId(orderId); // Set the selected orderId
        setSelectedOrder(orderId === selectedOrder ? null : orderId);
    };

    // Search
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchOrders = async () => {
        const response = await fetch(`/api/users/${session.user.id}/orders`);
        const data = await response.json();

        setAllOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    //SEARCH FUNCTIONALITY
    const filterOrders = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allOrders.filter(
            (item) =>
                regex.test(item.first) ||
                regex.test(item._id) ||
                regex.test(item.email) ||
                regex.test(item.last)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterOrders(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };



    return (
        <div className='flex'>
            <div className='flex-1'>
                <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            className="mb-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for email, name or order ID ..."
                            required
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </div>
                </form>

                <div className="relative overflow-auto h-4/5 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    e-mail
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderList
                                data={searchedResults.length > 0 ? searchedResults : allOrders}
                                handleClick={handleClick}
                                selectedOrderId={selectedOrderId}
                            />

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex-1 '>
                <OrderDetails
                    orderId={selectedOrderId}
                    fetchOrders={fetchOrders}
                />
            </div>
        </div>
    )
}

export default UserOrderTable;