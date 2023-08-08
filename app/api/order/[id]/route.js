
import { connectToDB } from "@utils/database";
import Order from "@models/order";

//GET 
export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        // const orders = await Order.find({}).populate('date');
        const order = await Order.findById(params.id).populate('date');

        if (!order) {
            return new Response("Order not found", {
                status: 404,})
        }

        return new Response(JSON.stringify(order), {
            status: 200,})
        
    } catch (error) {
        return new Response("Failed to load order", {
            status: 500,})
    }
}

//patch UPDATE

export const PATCH = async (request, {params}) => {
    const {order} = await request.json();
    console.log(order);

    try {
        await connectToDB();

        const existingOrder = await Order.findById(params.id);
        console.log(existingOrder);
        
        if (!existingOrder) return new Response("Order not found", {status: 404,})
        
        existingOrder.email= order.email;
        existingOrder.first= order.first;
        existingOrder.last= order.last;
        existingOrder.phone= order.phone;
        existingOrder.company= order.company;
        existingOrder.address= order.address;
        existingOrder.b_address= order.b_address;
        existingOrder.notes= order.notes;

        await existingOrder.save();
        return new Response(JSON.stringify(existingOrder), {status: 200,})
    } catch (error) {
        return new Response("Failed to update order", {status: 500,})
    }
}

//DELETE

export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();

        await Order.findByIdAndDelete(params.id);

        return new Response(JSON.stringify({message: "Order deleted successfully"}), {status: 200,})
    } catch (error) {
        return new Response("Failed to remove order", {status: 500,})
    }
}