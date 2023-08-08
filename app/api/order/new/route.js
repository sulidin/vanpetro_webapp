import { connectToDB } from "@utils/database";
import Order from "@models/order";

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
        notes ,
        date,
        uploadedFileName,
    } = await request.json();
        console.log(request);
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
                notes ,
                date,
                uploadedFileName,
            })
            await newOrder.save();
            return new Response(JSON.stringify(newOrder), {
                status: 201})
        } catch (error) {
            return new Response("Error creating order", {status:500})
        }
}