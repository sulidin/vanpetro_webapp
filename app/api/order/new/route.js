import { connectToDB } from "@utils/database";
import Order from "@models/order";
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request) => {


    const {
        userId,
        email,
        first,
        last,
        phone,
        company,
        address,
        b_address,
        notes,
        date,
        uploadedFileName,
    } = await request.json();
    

    try {
        await connectToDB();
        const newOrder = new Order({
            userId,
            email,
            first,
            last,
            phone,
            company,
            address,
            b_address,
            notes,
            date,
            uploadedFileName,
        })
        await newOrder.save();

        const message = `
            Thank you for your order!\r\n
            Email: ${newOrder.email}\r\n
            Order Date: ${newOrder.date}\r\n
            First Name: ${newOrder.first}\r\n
            Last Name: ${newOrder.last}\r\n
            Phone: ${newOrder.phone}\r\n
            Company: ${newOrder.company}\r\n
            Address: ${newOrder.address}\r\n
            Billing Address: ${newOrder.b_address}\r\n
            Notes: ${newOrder.notes}\r\n
            File: ${newOrder.uploadedFileName}
            `;
        await mail.send({
            to: newOrder.email,
            from: 'furkan4rck@gmail.com',
            subject: 'Van Petro Order Received!',
            text: message,
            html: message.replace(/\r\n/g, '<br>'),
        });

        return new Response(JSON.stringify(newOrder), {
            status: 201
        })
    } catch (error) {
        return new Response("Error creating order", { status: 500 })
    }
}