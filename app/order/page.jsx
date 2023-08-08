"use client";

import Heros from '@components/Heros';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Contact from '@components/Contact';
import OrderForm from '@components/OrderForm';


const Order = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // const [file, setFile] = useState([]);

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ 
    email: "", first: "" , last: "", 
    phone: "",company: "", address: "", city: "", state: "", zip: "", country: "", 
    b_address: "", b_city: "", b_state: "", b_zip: "", b_country: "", notes:"", date:"", uploadedFileName: ""
  });


  const createOrder = async (e) => {
    
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const response = await fetch ("/api/order/new", {
        method: "POST",
   
        body: JSON.stringify({
          userId: session?.user.id,
          email: post.email,
          first: post.first,
          last: post.last,
          phone: post.phone,
          company: post.company,
          

          address: post.address + " " +
          "city: " + post.city + " " +
          "state: " + post.state+ " " +
          "zip:" + post.zip+ " " +
          "country: " + post.country,

          b_address: post.b_address + " " +
          "city: " + post.b_city + " " +
          "state: " + post.b_state+ " " +
          "zip:" + post.b_zip+ " " +
          "country: " + post.b_country,

          notes: post.notes, 
          date : post.date,
          uploadedFileName: post.uploadedFileName,
        }),
      });

      if (response.ok) {
        //ADD MODAL
        alert("Order submitted successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Heros
      src='/assets/images/Hero.jpg'
      text='ONLINE ORDER'
      />
      <OrderForm
      type='Create'
      post={post}
      setPost={setPost}
      // setFile={setFile}
      submitting={submitting}
      handleSubmit={createOrder}
    />

      <Contact />
    </>
  );
}

export default Order;