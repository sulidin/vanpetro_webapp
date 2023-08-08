import  { Schema, model, models } from 'mongoose';

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    email: {
        type: String,
        required: true,
    },
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    
    b_address: {
        type: String,
        required: false,
    },

    notes: {
        type: String,
        required: false,
    },

    date : {
        type : Date,
       
    },

    uploadedFileName: {
        type: String,
        required: false,
    },
    
});

const Order = models.Order || model('Order', orderSchema);

export default Order;