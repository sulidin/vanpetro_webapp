'use client';
import React, { useEffect, useState } from 'react';



const Order = ({ order, handleClick, isSelected }) => {

 

    // Convert the order.date string to a Date object
    const orderDate = new Date(order.date);

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
    const formattedDate = `${orderDate.getDate()}-${months[orderDate.getMonth()]}-${orderDate.getFullYear()} ${formatTime(orderDate)}`;

    return (
        <tr onClick={() => {
            handleClick();
        }} className={`${isSelected ? "bg-blue-200" : "bg-white"
            } border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer`}
        >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {formattedDate}
            </th>
            <td className="px-6 py-4">
                {order.first}{" "}{order.last}
            </td>
            <td className="px-6 py-4">
                {order.email}
            </td>
            <td className="px-6 py-4">
                {order.company}
            </td>
        </tr>
    )
}

export default Order