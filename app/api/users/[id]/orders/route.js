import { connectToDB } from "@utils/database";
import Order from "@models/order";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const orders = await Order.find({userId: params.id}).sort({ date: -1 }).populate('userId');

        return new Response(JSON.stringify(orders), {
            status: 200,})
        
    } catch (error) {
        return new Response("Failed to load orders", {
            status: 500,})
    }

}