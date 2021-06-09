import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    //main id for the user
    phone: {type: String, unique: true, required: true},
    //optional
    profile: {
        firstName: String,
        lastName: String,
        email: String,
        imageBlob: Buffer
    },

    creationDate: { type: Date, default: Date.now },
    
    devices: Array,
    
    serviceProfile: {
        type: String,
        tags: Array
    }


},  { collection: 'users' });

const User = mongoose.model('User', schema);

export default User;