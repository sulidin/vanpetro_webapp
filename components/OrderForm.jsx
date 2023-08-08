'use client';

import React, { useState } from 'react';
import { Buttons } from '@components/Buttons'





const OrderForm = ({ type, post, setPost, submitting, handleSubmit }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [showBillingForm, setShowBillingForm] = useState(false);
    const [fileName , setFileName] = useState('');

    const [file, setFile] = useState([]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setShowBillingForm(!showBillingForm);

    };


    const onSubmit = async (e) => {
        // console.log({post});
        e.preventDefault();

        if (!file) return;

        try {
            const data = new FormData();
            data.set('file', file);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });

            if (!res.ok) throw new Error(await res.text());
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='order-form my-10 mb-20 mx-50'>
            <h1 className='text-center'>Please fill out the form below before sending your samples.</h1>

            <p className='my-4 text-center mb-10'>Once you submit this form, you will receive a confirmation email with the information you submit. Print the page and include it with any samples you send. Thank you!</p>
            <form onSubmit={(e) => { handleSubmit(e); onSubmit(e); }}>

                {/* CONTACT INFORMATION*/}

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        value={post.email}
                        onChange={(e) => setPost({ ...post, email: e.target.value, date: new Date() })}
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
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        {/* pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" */}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.company}
                            onChange={(e) => setPost({ ...post, company: e.target.value })}
                            type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                    </div>
                </div>

                {/* SHIPPING ADDRESS*/}

                <label className="block mb-2 my-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Address</label>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        value={post.address}
                        onChange={(e) => setPost({ ...post, address: e.target.value })}
                        type="address" name="floating_address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                    <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.city}
                            onChange={(e) => setPost({ ...post, city: e.target.value })}
                            type="text" name="floating_city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.state}
                            onChange={(e) => setPost({ ...post, state: e.target.value })}
                            type="text" name="floating_region" id="floating_region" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_region" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Region</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.zip}
                            onChange={(e) => setPost({ ...post, zip: e.target.value })}
                            type="text" name="floating_postal_code" id="floating_postal_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_postal_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal/Zip Code</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={post.country}
                            onChange={(e) => setPost({ ...post, country: e.target.value })}
                            type="text" name="floating_country" id="floating_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                        <label htmlFor="floating_country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                    </div>
                </div>

                <label className="block mb-2 my-4 text-sm font-medium text-gray-900 dark:text-white">Billing Address</label>

                <label className="relative inline-flex items-center cursor-pointer my-5">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={!isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {isChecked ? 'Same as shipping address' : 'Same as shipping address'}
                    </span>
                </label>

                {/* BILLING ADDRESS*/}

                {showBillingForm && (
                    <>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={post.b_address}
                                onChange={(e) => setPost({ ...post, b_address: e.target.value })}
                                type="address" name="billing_address" id="billing_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                            <label htmlFor="billing_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Billing address</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    value={post.b_city}
                                    onChange={(e) => setPost({ ...post, b_city: e.target.value })}
                                    type="text" name="billing_city" id="billing_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                                <label htmlFor="billing_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    value={post.b_state}
                                    onChange={(e) => setPost({ ...post, b_state: e.target.value })}
                                    type="text" name="billing_region" id="billing_region" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                                <label htmlFor="billing_region" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Region</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    value={post.b_zip}
                                    onChange={(e) => setPost({ ...post, b_zip: e.target.value })}
                                    type="text" name="billing_postal_code" id="billing_postal_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                                <label htmlFor="billing_postal_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal/Zip Code</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    value={post.b_country}
                                    onChange={(e) => setPost({ ...post, b_country: e.target.value })}
                                    type="text" name="billing_country" id="billing_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-red-900 peer" placeholder=" " required />
                                <label htmlFor="billing_country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                            </div>
                        </div>
                    </>
                )}

                {/* //FILE UPLOAD */}

                <label className="block mb-2 my-10 text-sm font-medium text-gray-900 dark:text-white">Sample List</label>
        
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF, XSL, DOC</p>
                            <p className="text-xl mt-5 text-gray-500 dark:text-gray-400">{fileName}</p>
                        </div>
                        <input onChange={(e) => { setFile(e.target.files?.[0]); setPost({ ...post, uploadedFileName: e.target.files?.[0].name }); setFileName(e.target.files?.[0].name) }} id="dropzone-file" type="file" hidden={true}/>                 
                    </label>
                </div>

                {/* NOTES */}

                <label htmlFor="form_message" className="block mb-2 my-10 text-sm font-medium text-gray-900 dark:text-white">Additional Notes</label>
                <textarea
                    value={post.notes}
                    onChange={(e) => setPost({ ...post, notes: e.target.value })}
                    id="form_message" rows="4" className="block p-2.5 mb-10 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services..."></textarea>

                <Buttons
                    type="submit"
                    // disabled={submitting}
                    className='btn ' buttonStyle='btn--primary' buttonSize='btn--medium'>Submit</Buttons>
            </form>
        </div>

    )
}

export default OrderForm